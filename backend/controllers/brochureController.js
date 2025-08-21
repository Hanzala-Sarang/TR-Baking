// controllers/brochureController.js

const { sendBrochureDownloadToGoogleSheet } = require('../controllers/sheetController');
const { validateBrochureDownload } = require('../utils/validation');

/**
 * Controller to handle brochure download requests.
 * Prioritizes saving data to Google Sheet.
 */
const brochureController = {
  /**
   * Handles the request to record a brochure download.
   * @param {Object} req - Express request object (expects customerInfo: { name, phone })
   * @param {Object} res - Express response object
   */
  handleBrochureDownload: async (req, res) => {
    try {
      const { customerInfo } = req.body;

      // Validate request data
      const validationError = validateBrochureDownload(customerInfo);
      if (validationError) {
        return res.status(400).json({
          success: false,
          message: validationError
        });
      }

      // --- STEP 1: Attempt to send data to Google Sheet ---
      console.log('Processing brochure download request:', customerInfo);
      await sendBrochureDownloadToGoogleSheet(customerInfo);
      console.log('Brochure download request successfully saved to Google Sheet.');

      // --- STEP 2: Return success response ---
      res.status(200).json({
        success: true,
        message: 'Brochure download request submitted successfully.'
      });

    } catch (error) {
      // This catch block handles errors during sheet submission or unexpected errors.
      console.error('Error in handleBrochureDownload:', error);
      res.status(500).json({
        success: false,
        message: 'An unexpected error occurred while processing your brochure download request.'
      });
    }
  }
};

module.exports = brochureController;
