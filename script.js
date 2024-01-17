// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Get the user's IP address
  fetch("https://api64.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      const userIP = data.ip;

      // Generate a user ID based on the IP address
      const userId = generateUserId(userIP);

      // Set the generated user ID in the input field
      document.getElementById("userIdInput").value = userId;
    })
    .catch((error) => {
      console.error("Error fetching IP address:", error);
    });
});

function generateUserId(userIP) {
  // Generate a user ID based on the user's IP address
  return "user_" + hashCode(userIP);
}

function hashCode(str) {
  // Simple hash function to convert the IP address to a number
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}
