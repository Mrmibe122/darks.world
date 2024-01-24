// api/generateKey.js
export default async function handler(req, res) {
  const key = generateRandomKey();
  res.json({ key });
}

function generateRandomKey() {
  // Replace with your key generation logic
  return Math.random().toString(36).substring(7);
}
