// script.js
document.addEventListener('DOMContentLoaded', () => {
  const generatePageBtn = document.getElementById('generatePageBtn');

  generatePageBtn.addEventListener('click', async () => {
    const userId = await generateUserId();
    window.location.href = `/user/${userId}`;
  });

  async function generateUserId() {
    const response = await fetch('/api/generateUserId');
    const data = await response.json();
    return data.userId;
  }
});
