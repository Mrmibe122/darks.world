// script.js
document.addEventListener('DOMContentLoaded', () => {
  const generatePageBtn = document.getElementById('generatePageBtn');

  generatePageBtn.addEventListener('click', async () => {
    const userId = await generateUserId();
    
    // Call the generatePage API to create a user-specific page
    await fetch(`/api/generatePage?userId=${userId}`, { method: 'POST' });
    
    // Redirect to the user-specific page
    window.location.href = `/${userId}`;
  });

  async function generateUserId() {
    const response = await fetch('/api/generateUserId');
    const data = await response.json();
    return data.userId;
  }
});
