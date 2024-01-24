// api/deletePage.js
export default async function handler(req, res) {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  // Add logic to delete the user-specific page or clear the associated data

  res.json({ success: true });
}
