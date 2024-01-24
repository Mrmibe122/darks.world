document.addEventListener('DOMContentLoaded', () => {
  const generateKeyBtn = document.getElementById('generateKeyBtn');

  generateKeyBtn.addEventListener('click', async () => {
    const ipAddress = await getUserIpAddress();
    const key = await generateUserKey(ipAddress);
    alert(`Your generated key: ${key}`);
  });

  async function getUserIpAddress() {
    // Use a third-party service to get the user's public IP address
    const response = await fetch('https://api64.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  }

  async function generateUserKey(ipAddress) {
    const response = await fetch(`/api/generateKey?ipAddress=${ipAddress}`);
    const data = await response.json();
    return data.key;
  }
});
