function generatePage() {
    // Generate a random identifier for the user (you can use a more secure method)
    const userId = generateRandomId();

    // Redirect to the dynamically generated user page
    window.location.href = `user-data/user_${userId}.html`;
}

function generateRandomId() {
    // Generate a random 8-character alphanumeric string
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomId = '';
    for (let i = 0; i < 8; i++) {
        randomId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return randomId;
}
