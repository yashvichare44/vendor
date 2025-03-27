import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (window.google && window.google.translate) {
      setIsLoaded(true);
    } else {
      // Check if Google Translate is loaded every 500ms
      const checkGoogleTranslate = setInterval(() => {
        if (window.google && window.google.translate) {
          setIsLoaded(true);
          clearInterval(checkGoogleTranslate);
        }
      }, 500);

      // Stop checking after 5 seconds
      setTimeout(() => clearInterval(checkGoogleTranslate), 5000);
    }
  }, []);

  const handleLanguageChange = (event) => {
    if (!isLoaded) {
      alert("Google Translate is still loading, please wait...");
      return;
    }

    const selectedLanguage = event.target.value;

    if (selectedLanguage === "en") {
      window.location.reload(); // Reset to English
      return;
    }

    const googleTranslateFrame = document.querySelector(".goog-te-menu-frame");
    if (!googleTranslateFrame) {
      alert("Google Translate is not loaded yet. Try again in a few seconds.");
      return;
    }

    const translateMenu =
      googleTranslateFrame.contentDocument || googleTranslateFrame.contentWindow.document;
    const langLink = translateMenu.querySelector(`a[lang="${selectedLanguage}"]`);
    if (langLink) langLink.click();
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      {/* Language Selector Dropdown */}
      <select
        onChange={handleLanguageChange}
        className="border rounded-lg p-2 shadow-md"
      >
        <option value="en">English (Default)</option>
        <option value="hi">हिन्दी (Hindi)</option>
        <option value="bn">বাংলা (Bengali)</option>
        <option value="ta">தமிழ் (Tamil)</option>
        <option value="te">తెలుగు (Telugu)</option>
        <option value="mr">मराठी (Marathi)</option>
        <option value="gu">ગુજરાતી (Gujarati)</option>
      </select>

      {/* Google Translate Hidden Element */}
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
};

export default LanguageSwitcher;