// vercel/generatePage.js

const crypto = require('crypto');

module.exports = async (req, res) => {
  // Generate a unique user identifier for each request
  const userId = generateUserId();

  // Here you can use the userId for further customization or storage
  const dynamicContent = `<h1>Welcome to Your Page, User ${userId}!</h1>`;

  res.status(200).json({ html: dynamicContent, userId });
};

function generateUserId() {
  // Generate a unique identifier using Node.js crypto module
  return crypto.randomBytes(16).toString('hex');
}
