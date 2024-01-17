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
            console.error(error);
        });
}
