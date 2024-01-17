module.exports = (req, res) => {
  // Check if a valid user ID is provided in the request
  const providedUserID = req.query.userID;
  if (providedUserID && /^[a-zA-Z0-9]{9}$/.test(providedUserID)) {
    // If valid, respond with the provided user ID
    res.json({ userID: providedUserID });
  } else {
    // If invalid or not provided, generate a new user ID
    const newUserID = Math.random().toString(36).substr(2, 9);
    // Respond with the new user ID
    res.json({ userID: newUserID });
  }
};
