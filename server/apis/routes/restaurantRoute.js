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
router.get("/", async (req, res) => {
    try {
        const search = req.query.search;
        if (search) {
            const restaurant = await restaurantService.getAllResultsRestaurant(search);
            return res.status(200).json(restaurant);
        } 
    } catch (error) {
        console.error("Error fetching restauarants:", error);
        res.status(500).json({ message: "Failed to fetch restauarants" });
    }
});

module.exports = router; 