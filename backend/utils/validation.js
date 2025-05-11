// utils/validation.js

/**
 * Validate quote request data
 * @param {Object} customerInfo - Customer information
 * @param {Object} productDetails - Product details
 * @returns {string|null} Error message or null if valid
 */
const validateQuoteRequest = (customerInfo, productDetails) => {
  // Check if customer info exists
  if (!customerInfo) {
    return 'Customer information is required';
  }
  
  // Check required customer fields
  const { name, email, phone } = customerInfo;
  if (!name || !email || !phone) {
    return 'Name, email and phone are required';
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Please provide a valid email address';
  }
  
  // Check if product details exists
  if (!productDetails) {
    return 'Product details are required';
  }
  
  // Check required product fields
  const { id, name: productName } = productDetails;
  if (!id || !productName) {
    return 'Product ID and name are required';
  }
  
  return null; // No errors
};

// utils/formatters.js

/**
 * Format product specifications for email display
 * @param {Object} specifications - Product specifications object
 * @returns {string} HTML formatted specifications
 */
const formatProductSpecifications = (specifications) => {
  if (!specifications || Object.keys(specifications).length === 0) {
    return '<p>No specifications provided</p>';
  }
  
  let formattedHtml = '<table style="width: 100%; border-collapse: collapse;">';
  
  // Add table header
  formattedHtml += `
    <tr style="background-color: #f9fafb;">
      <th style="text-align: left; padding: 8px; border: 1px solid #e5e7eb;">Specification</th>
      <th style="text-align: left; padding: 8px; border: 1px solid #e5e7eb;">Value</th>
    </tr>
  `;
  
  // Add table rows for each specification
  Object.entries(specifications).forEach(([key, value], index) => {
    const formattedKey = key.replace(/([A-Z])/g, ' $1').trim();
    const rowStyle = index % 2 === 0 ? 'background-color: #ffffff;' : 'background-color: #f9fafb;';
    
    let valueDisplay;
    if (Array.isArray(value)) {
      valueDisplay = value.map(item => `<div>${item}</div>`).join('');
    } else {
      valueDisplay = value;
    }
    
    formattedHtml += `
      <tr style="${rowStyle}">
        <td style="padding: 8px; border: 1px solid #e5e7eb; font-weight: 500;">${formattedKey}</td>
        <td style="padding: 8px; border: 1px solid #e5e7eb;">${valueDisplay}</td>
      </tr>
    `;
  });
  
  formattedHtml += '</table>';
  return formattedHtml;
};

module.exports = {
  formatProductSpecifications, validateQuoteRequest
};