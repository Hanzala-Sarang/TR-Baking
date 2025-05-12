const axios = require("axios");

const sendToGoogleSheet = async (customerInfo, productDetails) => {
  try {

    const payload = {
      name: customerInfo.name,
      email: customerInfo.email,
      phone: customerInfo.phone,
      productName: productDetails.name,
      model: productDetails.model,
      category: productDetails.category,
    };

    const response = await axios.post(
      "https://script.google.com/macros/s/AKfycbyM2_pcOVIx8U6B9-q2i5TMxuJZPm008RKFIGj_CF-l_VFBRF8Ge4mA-poeHj5Y3rvA-A/exec",
      payload
    );


  } catch (error) {
    console.error("Error sending to Google Sheet:", error.message);
  }
};

module.exports = { sendToGoogleSheet };
