// vercel/generatePage.js

const crypto = require('crypto');

// In-memory storage for user identifiers
const userStorage = new Map();

module.exports = async (req, res) => {
  // Check if the user has an existing identifier
  let userId = req.cookies.userId;

  if (!userId) {
    // If no identifier exists, generate a new one
    userId = generateUserId();

    // Store the identifier in the user's cookie
    res.setHeader('Set-Cookie', `userId=${userId}; HttpOnly; Secure; SameSite=Strict`);
  }

  // Here you can use the userId for further customization or storage
  const dynamicContent = `<h1>Welcome to Your Page, User ${userId}!</h1>`;

  res.status(200).json({ html: dynamicContent, userId });
};

function generateUserId() {
  // Generate a unique identifier using Node.js crypto module
  return crypto.randomBytes(16).toString('hex');
}
