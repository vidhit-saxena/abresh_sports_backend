const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    message: { type: String, required: false },
}, { timestamps: true });

module.exports = mongoose.model("Enquiry", enquirySchema);
