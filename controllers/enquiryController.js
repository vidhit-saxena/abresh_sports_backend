const Enquiry = require("../models/Enquiry");

// Create a new enquiry
exports.createEnquiry = async (req, res) => {
    try {
        const enquiry = new Enquiry(req.body);
        await enquiry.save();
        res.status(201).json({ message: "Enquiry submitted successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all enquiries
exports.getAllEnquiries = async (req, res) => {
    try {
        const enquiries = await Enquiry.find();
        res.status(200).json(enquiries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
