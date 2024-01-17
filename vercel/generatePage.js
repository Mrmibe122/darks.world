// vercel/generatePage.js

module.exports = async (req, res) => {
  const userId = req.query.userId;

  // Check if the user ID is valid (add your own validation logic)
  if (!isValidUserId(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  // Here you can generate dynamic content for the user
  const dynamicContent = `<h1>Welcome to Your Page, ${userId}!</h1>`;

  res.status(200).json({ html: dynamicContent });
};

function isValidUserId(userId) {
  // Implement your validation logic (e.g., length, format)
  return userId && userId.trim().length > 0;
}
