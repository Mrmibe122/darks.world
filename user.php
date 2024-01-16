<?php
// Check if the user ID is valid
if (isset($_GET['id']) && isValidUserId($_GET['id'])) {
    $userId = $_GET['id'];
    // Display the user-specific page
    echo "<h1>Welcome, User $userId!</h1>";
    echo "<p>This is your user-specific page.</p>";
    echo "<p>Remember, once you close or refresh this page, it will be deleted forever.</p>";
} else {
    // Redirect back to the homepage if the user ID is invalid
    header("Location: index.html");
    exit();
}

function isValidUserId($userId) {
    // Add your validation logic here
    // For example, check if the user ID exists in a database
    // Return true if valid, false otherwise
    return true;
}
?>
