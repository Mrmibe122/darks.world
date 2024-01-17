// vercel/generatePage.js

const crypto = require('crypto');

module.exports = async (req, res) => {
  // Generate a random identifier for each request
  const requestId = generateRandomId();

  // Here you can use the requestId for further customization or storage
  const dynamicContent = `<h1>Welcome to Your Page, Request ${requestId}!</h1>`;

  res.status(200).json({ html: dynamicContent, requestId });
};

function generateRandomId() {
  // Generate a random identifier using Node.js crypto module
  return crypto.randomBytes(16).toString('hex');
}
