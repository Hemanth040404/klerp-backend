const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { register, login, getProfile } = require('../controllers/authController');

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

// Get user profile route (protected)
router.get('/profile', auth, getProfile);

module.exports = router;