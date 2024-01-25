// api/generatePage.js
import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const userId = req.body.userId;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Assuming you want to create a user-specific HTML file
    const generatedPageContent = `<html><head><title>User Page</title></head><body><h1>Hello, User ${userId}!</h1></body></html>`;

    // Set the path for user-specific pages
    const userPagesDirectory = path.join(process.cwd(), 'userPages');
    const userPagePath = path.join(userPagesDirectory, `${userId}.html`);

    try {
      // Write the generated content to the user-specific HTML file
      await fs.writeFile(userPagePath, generatedPageContent, 'utf-8');
      console.log(`User-specific page for ${userId} created.`);
      res.status(200).json({ success: true });
    } catch (err) {
      console.error(`Error creating user-specific page for ${userId}: ${err.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
