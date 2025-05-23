// controllers/quoteController.js

const emailService = require('../services/emailService');
const { validateQuoteRequest } = require('../utils/validation');
const { sendToGoogleSheet } = require('./sheetController'); // Assuming sheetController is correctly set up

/**
 * Controller to handle sending quote requests
 * Prioritizes saving data to Google Sheet, then attempts email notification.
 */
const quoteController = {
  /**
   * Send a quote request, prioritizing Google Sheet storage.
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  sendQuoteRequest: async (req, res) => {
    let emailSentSuccessfully = false; // Flag to track email status

    try {
      const { customerInfo, productDetails } = req.body;

      // Validate request data
      const validationError = validateQuoteRequest(customerInfo, productDetails);
      if (validationError) {
        return res.status(400).json({
          success: false,
          message: validationError
        });
      }

      // --- STEP 1: Attempt to send data to Google Sheet (PRIORITY) ---
      try {
        await sendToGoogleSheet(customerInfo, productDetails);
        console.log('Quote request successfully saved to Google Sheet.');
        // If sheet storage is successful, proceed to email or return success
      } catch (sheetError) {
        console.error('CRITICAL ERROR: Failed to save quote request to Google Sheet:', sheetError);
        // If sheet storage fails, it's a critical error.
        // You might want to log this error more aggressively (e.g., to an error tracking service)
        // and notify an admin, as data is potentially lost.
        return res.status(500).json({
          success: false,
          message: 'Failed to process quote request. Please try again later.'
        });
      }

      // --- STEP 2: Attempt to send email (SECONDARY / NOTIFICATION) ---
      try {
        const emailData = {
          to: process.env.RECEIVER_EMAIL,
          subject: `New Quote Request: From ${customerInfo.name} - ${productDetails.name}`,
          customerInfo,
          productDetails
        };
        await emailService.sendQuoteRequestEmail(emailData);
        emailSentSuccessfully = true;
        console.log('Quote request email sent successfully.');
      } catch (emailError) {
        // Log the email error, but do NOT return a 500.
        // The data is already saved in the Google Sheet, so from the user's perspective,
        // the request was processed successfully.
        console.warn('WARNING: Failed to send quote request email:', emailError);
        // You might want to implement a retry mechanism for emails here,
        // or just rely on the sheet data for follow-up.
      }

      // --- STEP 3: Return success response (after sheet success, regardless of email) ---
      res.status(200).json({
        success: true,
        message: emailSentSuccessfully
          ? 'Quote request submitted successfully. A confirmation email has been sent.'
          : 'Quote request submitted successfully. (Note: Email notification could not be sent at this time, but your request has been recorded.)'
      });

    } catch (generalError) {
      // This catch block handles errors *before* sheet submission or unexpected errors.
      console.error('Unhandled error in sendQuoteRequest:', generalError);
      res.status(500).json({
        success: false,
        message: 'An unexpected error occurred while processing your request.'
      });
    }
  }
};

module.exports = quoteController;