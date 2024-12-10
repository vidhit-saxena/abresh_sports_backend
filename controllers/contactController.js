const Contact = require("../models/Contact");

exports.createContact = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, message } = req.body;

        if (!firstName || !lastName || !email || !phoneNumber || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const contact = new Contact({
            firstName,
            lastName,
            email,
            phoneNumber,
            message,
        });

        await contact.save();
        res.status(201).json({ message: "Contact form submitted successfully!" });
    } catch (error) {
        console.error("Error creating contact:", error.message);
        res.status(500).json({ message: "Server error. Please try again." });
    }
};
