function generatePage() {
    // Make a request to the serverless function for dynamic page generation
    fetch('/api/generate.js')
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

        });
}
