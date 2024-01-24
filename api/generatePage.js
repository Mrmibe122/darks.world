// api/generatePage.js
import crypto from 'crypto';

export default async function handler(req, res) {
  const userId = generateUserId();
  const pageUrl = `/user/${userId}`;

  // You can save userId and pageUrl to a database for future reference

  // Send the generated userId to the frontend
  res.json({ userId });
}

function generateUserId() {
  // Generate a unique and secure user ID (you can use a more complex logic)
  return crypto.randomBytes(16).toString('hex');
}
