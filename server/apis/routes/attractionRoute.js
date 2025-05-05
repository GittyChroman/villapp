const attractionService = require("../services/attractionService");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const attractions = await attractionService.getAllAttraction();
        res.json(attractions);
    } catch (error) {
        console.error("Error fetching attraction:", error);
        res.status(500).json({ message: "Failed to fetch attractions" });
    }

});

module.exports = router; 