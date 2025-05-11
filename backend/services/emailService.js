// services/emailService.js

const nodemailer = require('nodemailer');
const { formatProductSpecifications } = require('../utils/validation');

/**
 * Email service to handle sending emails with nodemailer
 */
const emailService = {
  /**
   * Create and configure the email transporter
   * @returns {Object} Configured nodemailer transporter
   */
  createTransporter: () => {
    // Create a transporter object using SMTP transport
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure:'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  },

  /**
   * Send quote request email with product details
   * @param {Object} emailData - Data needed to construct the email
   */
  sendQuoteRequestEmail: async (emailData) => {
    console.log(emailData)
    const {subject, customerInfo, productDetails } = emailData;
    
    // Format specifications for better email readability
    const formattedSpecs = formatProductSpecifications(productDetails.specifications);
    
    // Create HTML email body
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #d97706;">New Quote Request</h2>
        
        <div style="background-color: #f5f5f5; padding: 15px; margin-bottom: 20px; border-radius: 5px;">
          <h3 style="margin-top: 0;">Customer Information:</h3>
          <p><strong>Name:</strong> ${customerInfo.name}</p>
          <p><strong>Email:</strong> ${customerInfo.email}</p>
          <p><strong>Phone:</strong> ${customerInfo.phone}</p>
        </div>
        
        <div style="background-color: #fff8e1; padding: 15px; border-radius: 5px;">
          <h3 style="margin-top: 0;">Product Details:</h3>
          <p><strong>Product Name:</strong> ${productDetails.name}</p>
          <p><strong>Model:</strong> ${productDetails.model}</p>
          <p><strong>Category:</strong> ${productDetails.category}</p>
          <p><strong>Product ID:</strong> ${productDetails.id}</p>
          
          <h4>Specifications:</h4>
          <div style="background-color: #ffffff; padding: 10px; border-radius: 3px;">
            ${formattedSpecs}
          </div>
        </div>
        
        <p style="margin-top: 20px; font-size: 12px; color: #666;">
          This email was automatically generated from the website quote request form.
        </p>
      </div>
    `;
    
    // Configure email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // sender address
      to: process.env.RECEIVER_EMAIL, // list of receivers
      subject: subject, // Subject line
      html: htmlContent, // html body
      replyTo: customerInfo.email // set reply-to as the customer's email
    };
    
    // Get transporter and send email
    const transporter = emailService.createTransporter();
    return transporter.sendMail(mailOptions);
  }
};

module.exports = emailService;