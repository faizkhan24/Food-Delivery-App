const express = require("express");
const router = express.Router();
const User = require('../Models/userModel');

// Registration Route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({ name, email, password });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User Registered Successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Login Route

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email, password });
  
      if (user) {
        const currentUser = {
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          _id: user._id
        };
        res.status(200).json(currentUser);
      } else {
        res.status(401).json({ message: 'User Login Failed' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

module.exports = router;
