// vercel/generatePage.js

const crypto = require('crypto');

module.exports = async (req, res) => {
  // Get the user's IP address from the request
  const userIP = req.headers['x-real-ip'] || req.connection.remoteAddress;

  // Generate a unique identifier based on the user's IP
  const userId = generateUserId(userIP);

  // Here you can use the userId for further customization or storage
  const dynamicContent = `<h1>Welcome to Your Page, User ${userId}!</h1>`;

  res.status(200).json({ html: dynamicContent, userId });
};

function generateUserId(userIP) {
  // Generate a unique identifier using Node.js crypto module and user's IP
  return crypto.createHash('md5').update(userIP).digest('hex');
}
