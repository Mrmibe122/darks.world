// script.js

// Function to generate a new user ID and update the database
function generatePage() {
    const userId = generateUserId();

    // Redirect to the dynamically generated user page
    window.location.href = `user-data/user_${userId}.html`;
}

// Function to generate a unique user ID
function generateUserId() {
    // You can use a more sophisticated method to generate IDs if needed
    // For simplicity, this example uses a random 8-character alphanumeric string
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let userId = '';
    for (let i = 0; i < 8; i++) {
        userId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return userId;
}
