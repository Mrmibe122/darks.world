// userPageScript.js

window.addEventListener('beforeunload', function() {
    // Clear user-specific data on page unload (simulate deletion)
    const userId = getUserIdFromURL();
    // Implement additional cleanup or deletion logic if needed
    // ...

    // Redirect back to the homepage
    window.location.href = "index.html";
});

function getUserIdFromURL() {
    // Extract user ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('userId');
}
