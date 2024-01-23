//your JS code here. If required.
// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Get form and its elements
  const preferencesForm = document.getElementById("preferencesForm");
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");

  // Load preferences from cookies
  const loadPreferences = () => {
    const fontSize = getCookie("fontSize");
    const fontColor = getCookie("fontColor");

    if (fontSize) {
      document.documentElement.style.setProperty("--fontsize", fontSize);
      fontSizeInput.value = fontSize;
    }

    if (fontColor) {
      document.documentElement.style.setProperty("--fontcolor", fontColor);
      fontColorInput.value = fontColor;
    }
  };

  // Save preferences to cookies
  const savePreferences = () => {
    const fontSize = fontSizeInput.value + "px";
    const fontColor = fontColorInput.value;

    document.documentElement.style.setProperty("--fontsize", fontSize);
    document.documentElement.style.setProperty("--fontcolor", fontColor);

    setCookie("fontSize", fontSize, 365);
    setCookie("fontColor", fontColor, 365);

    alert("Preferences saved!");
  };

  // Event listener for form submission
  preferencesForm.addEventListener("submit", function (event) {
    event.preventDefault();
    savePreferences();
  });

  // Load preferences on page load
  loadPreferences();
});

// Function to set a cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to get a cookie by name
function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  if (match) return match[2];
  return null;
}
