import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS for handling cross-origin requests

app = Flask(__name__)
CORS(app)  # Enable CORS globally

# Configure Gemini API
genai.configure(api_key="AIzaSyDI1Zeible2hRZVUaL-pH-YTMqPUaQE9gw")

# System Prompt for Gemini AI
SYSTEM_PROMPT = """
You are an AI assistant for small businesses, farmers, and entrepreneurs.  
Provide short, clear answers on business growth, cost savings, finance, and government schemes.
Keep responses *short (max 2 lines)* and precise.
"""

# Predefined Navigation Commands
NAVIGATION_ROUTES = {
    "go to community": "/community",
    "go to schemes": "/schemes",
    "go to setup": "/business-setup",
    "go to insights": "/business-insights",
    "go to financial": "/financial-plan",
    "go to pricing": "/pay"
}

# Function to generate AI response
def get_gemini_response(user_input):
    model = genai.GenerativeModel("gemini-1.5-pro-latest")  # Using the Gemini Pro model
    
    # Check if input is a navigation request
    for key, route in NAVIGATION_ROUTES.items():
        if key in user_input.lower():
            return {"reply": f"Navigating to {route}", "route": route}

    # Otherwise, use AI to generate a response
    response = model.generate_content(SYSTEM_PROMPT + "\nUser Query: " + user_input)
    return {"reply": response.text.strip() if response else "I'm sorry, I couldn't process that request."}

# Flask route for chatbot
@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get("message")
    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    bot_reply = get_gemini_response(user_message)
    return jsonify(bot_reply)

if __name__ == "__main__":
    app.run(debug=True, port=5000)  # Flask API runs on port 5000