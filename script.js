function createUserPage() {
    // Generate a random user ID
    var userId = generateUserId();

    // Redirect to the user-specific page
    window.location.href = "user.php?id=" + userId;
}

function generateUserId() {
    // Generate a random alphanumeric string
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var userId = "";
    for (var i = 0; i < 10; i++) {
        userId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return userId;
}
