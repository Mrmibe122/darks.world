// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Auto-generate a user ID based on the user's IP address
  const userId = generateUserId();

  // Set the generated user ID in the input field
  document.getElementById("userIdInput").value = userId;

  // Display the user ID on the page (optional)
  document.getElementById("userIdDisplay").innerText = `Your User ID: ${userId}`;

  // Redirect to the generated page in the user-data directory
  document.getElementById("generatePageButton").addEventListener("click", function () {
    window.location.href = `user-data/${userId}.html`;
  });
});

function generateUserId() {
  // Generate a user ID based on the user's IP address (you can customize this logic)
  return "user_" + hashCode(getUserIP());
}

function hashCode(str) {
  // Simple hash function to convert the IP address to a number
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function getUserIP() {
  // This is just a placeholder, you might need to use a more reliable method to get the user's IP
  return "127.0.0.1";
}
