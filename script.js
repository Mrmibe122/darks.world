function generatePage() {
    // Check user authentication (implement secure validation)
    const userId = prompt("Enter your user ID:");

    // Check if the user ID is valid (you'd implement a more secure method)
    if (isValidUserId(userId)) {
        // Redirect to the dynamically generated page
        window.location.href = `userPage.html?userId=${userId}`;
    } else {
        alert("Invalid user ID. Access denied.");
    }
}

function isValidUserId(userId) {
    // Implement your secure validation logic (e.g., check against a database)
    // For simplicity, this example considers any non-empty string as valid
    return userId.trim() !== "";
}
