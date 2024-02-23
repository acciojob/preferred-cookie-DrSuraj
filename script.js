//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve saved preferences from cookies
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  // Apply saved preferences or default values
  document.body.style.fontSize = savedFontSize || "16px";
  document.body.style.color = savedFontColor || "#000000";

  // Handle form submission
 
