const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ email, password: hashedPassword, username, createdAt });
    const token = createSecretToken(user._id);

    // Set cookie with domain for cross-subdomain access
    const domain = process.env.NODE_ENV === 'production' ? '.onrender.com' : 'localhost';
    
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
      secure: process.env.NODE_ENV === 'production',
      domain: domain,
      path: '/',
      maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days
    });

    return res.status(201).json({
      success: true,
      message: "User signed up successfully",
      user,
    });
  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "Incorrect password or email" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ success: false, message: "Incorrect password or email" });
    }

    const token = createSecretToken(user._id);
    const domain = process.env.NODE_ENV === 'production' ? '.onrender.com' : 'localhost';

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
      secure: process.env.NODE_ENV === 'production',
      domain: domain,
      path: '/',
      maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days
    });

    return res.status(201).json({
      success: true,
      message: "User logged in successfully",
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};