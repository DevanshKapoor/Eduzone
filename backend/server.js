// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Mount routers
app.use('/api/auth', require('./routes/auth'));

// Create middleware directory if we don't have it yet
const fs = require('fs');
if (!fs.existsSync('./middleware')) {
  fs.mkdirSync('./middleware');
  fs.writeFileSync('./middleware/auth.js', `
    const jwt = require('jsonwebtoken');
    const User = require('../models/User');
    
    // Protect routes
    exports.protect = async (req, res, next) => {
      let token;
    
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
      ) {
        // Set token from Bearer token in header
        token = req.headers.authorization.split(' ')[1];
      }
    
      // Make sure token exists
      if (!token) {
        return res.status(401).json({
          success: false,
          message: 'Not authorized to access this route'
        });
      }
    
      try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
        req.user = await User.findById(decoded.id);
    
        next();
      } catch (err) {
        return res.status(401).json({
          success: false,
          message: 'Not authorized to access this route'
        });
      }
    };
  `);
}

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});