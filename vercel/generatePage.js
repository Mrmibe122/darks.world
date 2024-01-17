// vercel/generatePage.js
module.exports = (req, res) => {
  try {
    const userId = generateUserId();
    const generatedPageUrl = `/user-data/${userId}.html`;
    res.json({ url: generatedPageUrl });
  } catch (error) {
    console.error('Error generating page:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

function generateUserId() {
  return 'user_' + Date.now();
}
