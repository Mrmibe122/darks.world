// vercel/generatePage.js

module.exports = async (req, res) => {
  try {
    // Generate a unique user ID
    const userId = generateUserId();

    // Construct the page URL
    const generatedPageUrl = `/user-data/${userId}.html`;

    // Return the generated page URL
    res.json({ url: generatedPageUrl });
  } catch (error) {
    console.error("Error generating page:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

function generateUserId() {
  // Implement your user ID generation logic here
  // For example, you can use a timestamp or a random number
  return "user_" + Date.now();
}
