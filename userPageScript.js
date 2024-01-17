// userPageScript.js

window.addEventListener('beforeunload', function() {
    // Clear user-specific data on page unload (simulate deletion)
    const userId = getUserIdFromURL();
    localStorage.removeItem(userId);

    // Redirect back to the homepage
    window.location.href = "index.html";
});

function getUserIdFromURL() {
    // Extract user ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('userId');
}

function getAuthTokenFromURL() {
    // Extract authentication token from the URL
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('token');
}

function authenticateUser(userId, authToken) {
    // Retrieve the stored authentication token for the user
    const storedAuthToken = localStorage.getItem(userId);

    // Compare the provided token with the stored token
    return authToken === storedAuthToken;
}

// Check authentication on page load
document.addEventListener('DOMContentLoaded', function() {
    const userId = getUserIdFromURL();
    const authToken = getAuthTokenFromURL();

    if (!authenticateUser(userId, authToken)) {
        // Invalid authentication, redirect to the homepage
        alert("Invalid authentication. Redirecting to the homepage.");
        window.location.href = "index.html";
    }
});
