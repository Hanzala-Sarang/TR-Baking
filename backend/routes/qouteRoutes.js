// routes/quoteRoutes.js

const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');

/**
 * @route   POST /api/send-quote-request
 * @desc    Send product quote request via email
 * @access  Public
 */
router.post('/send-quote-request', quoteController.sendQuoteRequest);

module.exports = router;