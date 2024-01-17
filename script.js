// script.js
document.getElementById('generatePageBtn').addEventListener('click', async () => {
  try {
    const response = await fetch('/api/generatePage'); // Updated URL
    const data = await response.json();
    const generatedPageUrl = data.url;
    window.location.href = generatedPageUrl;
  } catch (error) {
    console.error('Error generating page:', error);
  }
});
