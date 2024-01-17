// script.js

document.addEventListener("DOMContentLoaded", async function () {
  try {
    // Fetch the user's IP address from ipify
    const ipResponse = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipResponse.json();
    const userIP = ipData.ip || "127.0.0.1"; // Use a default IP if fetching fails

    // Auto-generate a user ID based on the user's IP address
    const userId = generateUserId(userIP);

    // Set the generated user ID in the input field
    document.getElementById("userIdInput").value = userId;

    // Display the user ID on the page (optional)
    document.getElementById("userIdDisplay").innerText = `Your User ID: ${userId}`;

    // Add event listener for the "Generate Page" button
    document.getElementById("generatePageButton").addEventListener("click", async function () {
      try {
        // Fetch the generated page URL from the serverless function
        const response = await fetch('/api/generatePage');
        const data = await response.json();
        const generatedPageUrl = data.url;

        // Redirect to the generated page
        window.location.href = generatedPageUrl;
      } catch (error) {
        console.error("Error fetching generated page URL:", error);
      }
    });
  } catch (error) {
    console.error("Error fetching user's IP:", error);
  }
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
