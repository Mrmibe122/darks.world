// Function to handle the button click
function generatePage() {
  // Make a request to the serverless function for dynamic page generation
  fetch('/api/generate')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to generate page');
      }
    })
    .then(data => {
      // Redirect to the dynamically generated page with the user ID
      window.location.href = `button.html?userID=${data.userID}`;
    })
    .catch(error => {
      // Handle the error in a custom way, without logging to console
      // You can add your custom error handling logic here
      console.error("An error occurred, but it will not be logged to the console:", error);
    });
}

// Wrap your code in a function to ensure it runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Check for a stored user ID on page load and redirect to the home page if not found
  const storedUserID = sessionStorage.getItem('generatedUserID');
  if (!storedUserID || !/^[a-zA-Z0-9]{9}$/.test(storedUserID)) {
    window.location.href = 'index.html';
  }

  // Add an event listener to the button element
  document.getElementById('generatePageButton')?.addEventListener('click', generatePage);
});

// Handle page refresh by using the sessionStorage to remember the generated user ID
window.addEventListener('beforeunload', function () {
  const userID = document.getElementById('generatePageButton')?.dataset.userID;
  if (userID) {
    sessionStorage.setItem('generatedUserID', userID);
  }
});
