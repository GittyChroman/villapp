const apartmentService = require("../services/apartmentService");
const express = require("express");
const router = express.Router();

router.get("/apartments", async (req, res) => {
    try {
        const apartments = await apartmentService.getAllApartment();
        res.status(200).json(apartments);
    } catch (error) {
        console.error("Error fetching apartments:", error);
        res.status(500).json({ message: "Failed to fetch apartments" });
    }

});

module.exports = router; 