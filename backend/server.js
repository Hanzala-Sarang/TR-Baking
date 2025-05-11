// server.js - Main express application file

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const quoteRoutes = require('./routes/qouteRoutes');
const contactRoutes = require('./routes/contactRoutes')
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Adjust with your frontend URL
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', quoteRoutes);
app.use('/api', contactRoutes);

// Simple health check route
app.get('/health', (req, res) => {
  res.status(200).send('Server is running');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong on the server',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});