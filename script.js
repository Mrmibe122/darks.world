document.addEventListener('DOMContentLoaded', () => {
  const generateKeyBtn = document.getElementById('generateKeyBtn');

  generateKeyBtn.addEventListener('click', () => {
    const key = generateRandomKey();
    alert(`Your generated key: ${key}`);
  });

  function generateRandomKey() {
    // Replace with your key generation logic
    return Math.random().toString(36).substring(7);
  }
});
