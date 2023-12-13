const User = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User Registration
exports.store = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(404).json({ message: "Email Already Exist", status: 404 });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({ name, email, password: hashedPassword });

    res.status(200).json({ message: "User Registered Successfully", status: 200, user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error", status: 500 });
  }
};

// User Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found", status: 404, success: false });
    }

    // Compare hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
     
      return res.status(200).json({ message: "Login successful", status: 200, success: true });
    } else {
      return res.status(401).json({ message: "Invalid credentials", status: 401, success: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", status: 500 });
  }
};

// Get all users
exports.index = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "Users Fetched Successfully", status: 200, users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error", status: 500 });
  }
};
