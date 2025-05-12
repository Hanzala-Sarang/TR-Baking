const express = require("express");
const router = express.Router();
const { sendToGoogleSheet } = require("../controllers/sheetController");

router.post("/submit-quote", sendToGoogleSheet);

module.exports = router;
