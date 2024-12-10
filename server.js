const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const enquiryRoutes = require("./routes/enquiryRoutes");
const contactRoutes = require("./routes/contactRoutes");

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", enquiryRoutes);
app.use("/api", contactRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
