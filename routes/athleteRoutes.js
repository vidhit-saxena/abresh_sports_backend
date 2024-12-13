const express = require("express");
const { createAthlete, getAllAthletes } = require("../controllers/athleteController");

const router = express.Router();

// Route to create a new athlete
router.post("/athletes", createAthlete);

// Route to get all athletes
router.get("/athletes", getAllAthletes);

module.exports = router;