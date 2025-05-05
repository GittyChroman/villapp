const restaurantService = require("../services/restaurantService");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const restaurants = await restaurantService.getAllRestaurant();
        res.json(restaurants);
    } catch (error) {
        console.error("Error fetching restaurant:", error);
        res.status(500).json({ message: "Failed to fetch restaurants" });
    }

});

module.exports = router; 