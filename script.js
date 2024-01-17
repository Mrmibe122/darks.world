// script.js

function generatePage() {
    const userId = generateUserId();

    if (isValidUserId(userId)) {
        // Redirect to the user's page with the generated user ID
        window.location.href = `userPage.html?userId=${userId}`;
    } else {
        alert("Invalid user ID. Access denied.");
    }
}

function isValidUserId(userId) {
    // Implement your validation logic (e.g., length, format)
    return userId && userId.trim().length > 0;
}

function generateUserId() {
    // Generate a random 8-character alphanumeric string (for simulation purposes)
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let userId = '';
    for (let i = 0; i < 8; i++) {
        userId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return userId;
}
