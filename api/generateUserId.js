// api/generateUserId.js
import crypto from 'crypto';

export default async function handler(req, res) {
  const userId = generateUserId();
  res.json({ userId });
}

function generateUserId() {
  return crypto.randomBytes(16).toString('hex');
}
