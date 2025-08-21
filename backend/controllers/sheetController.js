// controllers/sheetController.js
const axios = require("axios");

// IMPORTANT: REPLACE THIS URL with the Web App URL from your QUOTE WORKBOOK's Apps Script deployment.
const GOOGLE_SHEET_QUOTE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyM2_pcOVIx8U6B9-q2i5TMxuJZPm008RKFIGj_CF-l_VFBRF8Ge4mA-poeHj5Y3rvA-A/exec";

// IMPORTANT: REPLACE THIS URL with the Web App URL from your NEW BROCHURE WORKBOOK's Apps Script deployment.
const GOOGLE_SHEET_BROCHURE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwgLa9tB2Rc4167rp0aDhgdrQNXmHBGd1M27YgXdZHw0S75_FrG_igXdnFrAK0KS51i/exec"; 

/**
 * Sends quote request data to the dedicated Quote Google Sheet.
 * @param {Object} customerInfo - Customer's name, email, phone.
 * @param {Object} productDetails - Product's name, model, category.
 */
const sendToGoogleSheet = async (customerInfo, productDetails) => {
  try {
    const payload = {
      type: "quote", // Explicitly define type as "quote"
      name: customerInfo.name,
      email: customerInfo.email,
      phone: customerInfo.phone,
      productName: productDetails.name,
      model: productDetails.model,
      category: productDetails.category,
    };

    const response = await axios.post(GOOGLE_SHEET_QUOTE_SCRIPT_URL, payload); // Use the quote-specific URL
    console.log("Google Sheet response (Quote):", response.data);

    if (response.data.status !== "success") {
        throw new Error(`Google Sheet API returned an error for quote request: ${response.data.message || 'Unknown error'}`);
    }

  } catch (error) {
    console.error("Error sending quote to Google Sheet:", error.message);
    throw error;
  }
};

/**
 * Sends brochure download request data to the dedicated Brochure Google Sheet.
 * @param {Object} customerInfo - Customer's name, phone.
 */
const sendBrochureDownloadToGoogleSheet = async (customerInfo) => {
  try {
    const payload = {
      type: "brochure", // Explicitly define type as "brochure"
      name: customerInfo.name,
      phone: customerInfo.phone,
    };

    const response = await axios.post(GOOGLE_SHEET_BROCHURE_SCRIPT_URL, payload); // Use the brochure-specific URL
    console.log("Google Sheet response (Brochure):", response.data);

    if (response.data.status !== "success") {
        throw new Error(`Google Sheet API returned an error for brochure request: ${response.data.message || 'Unknown error'}`);
    }

  } catch (error) {
    console.error("Error sending brochure download to Google Sheet:", error.message);
    throw error;
  }
};

module.exports = { sendToGoogleSheet, sendBrochureDownloadToGoogleSheet };
