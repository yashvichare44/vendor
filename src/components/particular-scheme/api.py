from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import json
import requests
import re
import os
import google.generativeai as genai
from typing import List, Optional, Dict, Any, Union

app = FastAPI()

# In a real application, these would be stored securely as environment variables
GENAI_API_KEY = "AIzaSyDI1Zeible2hRZVUaL-pH-YTMqPUaQE9gw"
YOUTUBE_API_KEY = "AIzaSyD1DdJQHsOlXpdObNcA6F0E9OmW7sSJISI"

# Configure Gemini AI
genai.configure(api_key=GENAI_API_KEY)

class YouTubeVideo(BaseModel):
    title: str
    url: str

class SchemeModel(BaseModel):
    Name: str
    Description: str
    Eligibility: str
    Benefits: str
    Application_Link: Optional[str] = None

class SectionModel(BaseModel):
    Section_Name: str
    Content: str
    Schemes: Optional[List[SchemeModel]] = None
    Steps: Optional[List[str]] = None
    YouTube_Videos: Optional[List[YouTubeVideo]] = None

class SchemeGuideResponse(BaseModel):
    Feature_Name: str
    Description: str
    Sections: List[SectionModel]

class UserProfile(BaseModel):
    gender: str
    age: int
    state: str
    area: str  # Urban/Rural
    category: str  # SC/ST/OBC/General
    differently_abled: str
    minority: str
    business: str

def fetch_gemini_response(prompt: str) -> Dict[str, Any]:
    """
    Fetch structured JSON from the Gemini API.
    """
    try:
        model = genai.GenerativeModel("gemini-1.5-pro-latest")
        response = model.generate_content(prompt)
        
        if response and response.text:
            return parse_json(response.text)
        return {"error": "Empty response from API"}
    except Exception as e:
        return {"error": f"API call failed: {e}"}

def parse_json(response_text: str) -> Dict[str, Any]:
    """
    Extract and parse JSON from the Gemini response.
    """
    try:
        return json.loads(response_text)
    except json.JSONDecodeError:
        match = re.search(r"\{.*\}", response_text, re.DOTALL)
        if match:
            try:
                return json.loads(match.group(0))
            except json.JSONDecodeError:
                pass
        return {"error": "Invalid JSON format"}

def fetch_youtube_videos(query: str) -> List[YouTubeVideo]:
    """
    Fetches YouTube videos related to the query using YouTube API.
    """
    url = "https://www.googleapis.com/youtube/v3/search"
    params = {
        "part": "snippet",
        "q": query,
        "key": YOUTUBE_API_KEY,
        "maxResults": 3,
        "type": "video"
    }
    
    try:
        response = requests.get(url, params=params)
        data = response.json()

        return [
            YouTubeVideo(
                title=item["snippet"]["title"],
                url=f"https://www.youtube.com/watch?v={item['id']['videoId']}"
            )
            for item in data.get("items", [])
        ]
    except Exception as e:
        # Fallback to mock data in case of API failure
        return [
            YouTubeVideo(
                title="How to Apply for Government Schemes Online",
                url="https://www.youtube.com/watch?v=example1"
            ),
            YouTubeVideo(
                title="Documents Required for Scheme Applications",
                url="https://www.youtube.com/watch?v=example2"
            )
        ]

def generate_prompt(user_data: UserProfile) -> str:
    """
    Generates a prompt for the Gemini API based on user profile data.
    """
    return f"""
    You are a precise JSON generator. You *MUST ONLY* respond with valid JSON. Do not include any introductory or explanatory text.

    Generate a structured guide for government schemes based on the following user profile:
    - Gender: {user_data.gender}
    - Age: {user_data.age}
    - State: {user_data.state}
    - Area: {user_data.area} (Urban/Rural)
    - Category: {user_data.category} (e.g., SC/ST/OBC/General)
    - Differently Abled: {user_data.differently_abled}
    - Minority Status: {user_data.minority}
    - Business Type: {user_data.business}

    Ensure the response is *accurate, up-to-date, and sourced from official government platforms*.

    *Response Format (JSON):*
    {{
        "Feature_Name": "Customized Government Scheme Finder",
        "Description": "A tailored guide for finding and applying for government schemes based on the user's profile.",
        "Sections": [
            {{
                "Section_Name": "Overview of Relevant Schemes",
                "Content": "A summary of schemes available based on the user's profile.",
                "Schemes": [
                    {{
                        "Name": "Scheme Name",
                        "Description": "Brief description of the scheme",
                        "Eligibility": "Eligibility criteria",
                        "Benefits": "Benefits provided",
                        "Application_Link": "URL"
                    }}
                ]
            }},
            {{
                "Section_Name": "Application Process",
                "Content": "Steps to apply for the selected schemes.",
                "Steps": [
                    "Step 1: Check eligibility criteria.",
                    "Step 2: Gather required documents.",
                    "Step 3: Apply online via the official portal."
                ]
            }},
            {{
                "Section_Name": "Tracking and Staying Updated",
                "Content": "Methods to track your application and receive updates."
            }}
        ]
    }}
    """

@app.post("/api/get-scheme-guide", response_model=SchemeGuideResponse)
async def get_scheme_guide(user_profile: UserProfile):
    """API endpoint to get government scheme recommendations."""
    try:
        # Generate prompt for the AI model
        prompt = generate_prompt(user_profile)
        
        # Get AI response from Gemini API
        ai_response = fetch_gemini_response(prompt)
        
        if "error" in ai_response:
            raise HTTPException(status_code=400, detail=ai_response["error"])
        
        # Validate the response structure
        if not isinstance(ai_response.get("Sections"), list):
            raise HTTPException(status_code=500, detail="Invalid response: 'Sections' should be a list")
        
        # Enrich each section with YouTube videos
        for section in ai_response["Sections"]:
            search_query = f"{section['Section_Name']} government schemes India"
            section["YouTube_Videos"] = fetch_youtube_videos(search_query)
        
        return ai_response
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing request: {str(e)}")

# For local testing
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)