// controllers/quoteController.js

const emailService = require('../services/emailService');
const { validateQuoteRequest } = require('../utils/validation');

/**
 * Controller to handle sending quote requests via email
 */
const quoteController = {
  /**
   * Send a quote request email with product details
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  sendQuoteRequest: async (req, res) => {
    try {
      const { customerInfo, productDetails } = req.body;
      
      // // Validate request data
      const validationError = validateQuoteRequest(customerInfo, productDetails);
      if (validationError) {
        return res.status(400).json({
          success: false,
          message: validationError
        });
      }
      
      // Prepare email content
      const emailData = {
        to: process.env.BUSINESS_EMAIL, // The business email from environment variables
        subject: `New Quote Request: From ${customerInfo.name} ${productDetails.name}`,
        customerInfo,
        productDetails
      };
      
      // Send the email
      await emailService.sendQuoteRequestEmail(emailData);
      
      // Return success response
      res.status(200).json({
        success: true,
        message: 'Quote request email sent successfully'
      });
      
    } catch (error) {
      console.error('Error sending quote request email:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to send quote request email'
      });
    }
  }
};

module.exports = quoteController;