// script.js

function generatePage() {
    const userId = prompt("Enter your user ID:");
    
    if (isValidUserId(userId)) {
        const authToken = generateAuthToken();
        saveAuthToken(userId, authToken);

        // Redirect to the user's page with the generated user ID and auth token
        window.location.href = `userPage.html?userId=${userId}&token=${authToken}`;
    } else {
        alert("Invalid user ID. Access denied.");
    }
}

function isValidUserId(userId) {
    // Implement your validation logic (e.g., length, format)
    return userId && userId.trim().length > 0;
}

function generateAuthToken() {
    // Generate a simple authentication token (for simulation purposes)
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let authToken = '';
    for (let i = 0; i < 16; i++) {
        authToken += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return authToken;
}

function saveAuthToken(userId, authToken) {
    // Save the authentication token to localStorage
    localStorage.setItem(userId, authToken);
}
