const User = require("../models/user.model");

// Get user by ID
exports.findById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).exec();
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login with username & password
exports.login = async (req, res) => {
  const { username, password } = req.body; // safer than query params

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  try {
    // Check if user exists
    const user = await User.findOne({ name: username, password }).exec();
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Login successful
    res.json({
      id: user._id,
      name: user.name,
      message: "Login successful"
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
