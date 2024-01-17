module.exports = (req, res) => {
  // Generate a unique user ID (you may use a library for this)
  const userID = Math.random().toString(36).substr(2, 9);
  
  // Redirect to the dynamically generated page with the user ID
  res.redirect(302, `/button?userID=${userID}`);
};
