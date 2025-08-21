// routes/brochureRoutes.js

const express = require('express');
const router = express.Router();
const brochureController = require('../controllers/brochureController'); // Path to your new controller

/**
 * @route   POST /api/brochure-download
 * @desc    Handle brochure download request, save to Google Sheet.
 * @access  Public
 */
router.post('/brochure-download', brochureController.handleBrochureDownload);

module.exports = router;
