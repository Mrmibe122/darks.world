// api/generateKey.js
import crypto from 'crypto';

export default async function handler(req, res) {
  const { ipAddress } = req.query;

  if (!ipAddress) {
    return res.status(400).json({ error: 'IP Address is required' });
  }

  const key = generateUserKey(ipAddress);
  res.json({ key });
}

function generateUserKey(ipAddress) {
  // Combine IP address with a secret key and hash it for security
  const secretKey = 'your_secret_key'; // Replace with your secret key
  const combinedString = `${ipAddress}:${secretKey}`;
  const hashedKey = crypto.createHash('sha256').update(combinedString).digest('hex');

  return hashedKey;
}
