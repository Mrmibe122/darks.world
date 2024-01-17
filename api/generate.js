module.exports = (req, res) => {
  // Generate a unique user ID (you may use a library for this)
  const userID = Math.random().toString(36).substr(2, 9);
  
  // Respond with the generated user ID
  res.json({ userID });
};
