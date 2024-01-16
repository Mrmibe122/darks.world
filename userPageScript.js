// userPageScript.js
// Add an event listener for page unload (refresh or close)
window.addEventListener('beforeunload', function() {
    // Implement logic to delete user-specific data or handle cleanup tasks
    alert("Page is being deleted. Bye!");
    // Redirect back to the homepage
    window.location.href = "../index.html";
});
