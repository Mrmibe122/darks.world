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

document.getElementById('generatePageButton')?.addEventListener('click', generatePage);

// Check for invalid user ID in the URL and redirect to the home page
window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const userID = params.get('userID');
  if (!userID || !/^[a-zA-Z0-9]{9}$/.test(userID)) {
    window.location.href = 'index.html';
  }
};

// Handle page refresh by using the sessionStorage to remember the generated user ID
window.onbeforeunload = function () {
  const userID = document.getElementById('generatePageButton').dataset.userID;
  sessionStorage.setItem('generatedUserID', userID);
};

// Check for a stored user ID on page load and redirect to the home page if not found
window.onload = function () {
  const storedUserID = sessionStorage.getItem('generatedUserID');
  if (!storedUserID || !/^[a-zA-Z0-9]{9}$/.test(storedUserID)) {
    window.location.href = 'index.html';
  }
};
