const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

// Initialize express
const app = express();

// Connect Database
connectDB();

// Initialize Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use('/api/auth', require('./routes/auth'));

// Define port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));