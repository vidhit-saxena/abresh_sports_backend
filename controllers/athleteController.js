const Athlete = require("../models/Athlete");

// Create a new athlete
exports.createAthlete = async (req, res) => {
  try {
    const newAthlete = new Athlete(req.body);
    const savedAthlete = await newAthlete.save();
    res.status(201).json(savedAthlete);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error)
  }
};

// Get all athletes
exports.getAllAthletes = async (req, res) => {
  try {
    const athletes = await Athlete.find();
    res.status(200).json(athletes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};