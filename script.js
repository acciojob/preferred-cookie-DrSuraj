document.addEventListener("DOMContentLoaded", function () {
  // Retrieve saved preferences from cookies
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  // Apply saved preferences or default values
  document.body.style.fontSize = savedFontSize || "16px";
  document.body.style.color = savedFontColor || "#000000";

  // Handle form submission
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get user input values
    const fontSize = document.getElementById("fontsize").value + "px";
    const fontColor = document.getElementById("fontcolor").value;

    // Apply user preferences
    document.body.style.fontSize = fontSize;
    document.body.style.color = fontColor;

    // Save preferences as cookies
    setCookie("fontsize", fontSize, 30); // Expires in 30 days
    setCookie("fontcolor", fontColor, 30);

    alert("Preferences saved successfully!");
  });
});

// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie value by name
function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name + "=") === 0) {
      return cookie.substring(name.length + 1, cookie.length);
    }
  }
  return "";
}
