const restaurantController = require("../controllers/restaurantController");

const getAllRestaurant = async () => {
    return await restaurantController.getAllRestaurant();
};

module.exports = { getAllRestaurant };