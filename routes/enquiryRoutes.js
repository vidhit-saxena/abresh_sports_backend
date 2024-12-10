const express = require("express");
const { createEnquiry, getAllEnquiries } = require("../controllers/enquiryController");

const router = express.Router();

router.post("/enquiries", createEnquiry); // Endpoint to create an enquiry
router.get("/enquiries", getAllEnquiries); // Endpoint to fetch all enquiries

module.exports = router;
