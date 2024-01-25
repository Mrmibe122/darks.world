// api/deletePage.js
import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const userId = req.query.userId;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Set the path for user-specific pages
    const userPagesDirectory = path.join(process.cwd(), 'userPages');
    const userPagePath = path.join(userPagesDirectory, `${userId}.html`);

    try {
      // Check if the user-specific page exists
      await fs.access(userPagePath);

      // If exists, delete the user-specific HTML file
      await fs.unlink(userPagePath);
      console.log(`User-specific page for ${userId} deleted.`);
      res.status(200).json({ success: true });
    } catch (err) {
      if (err.code === 'ENOENT') {
        console.error(`User-specific page for ${userId} not found.`);
        return res.status(404).json({ error: 'User Page Not Found' });
      } else {
        console.error(`Error deleting user-specific page for ${userId}: ${err.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
