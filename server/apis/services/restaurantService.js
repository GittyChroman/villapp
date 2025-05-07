const restaurantController = require("../controllers/restaurantController");

const getAllRestaurant = async () => {
    return await restaurantController.getAllRestaurant();
};
const getAllResultsRestaurant = async (results) => {

    return await restaurantController.getAllRestaurant(results);

};
module.exports = { getAllRestaurant, getAllResultsRestaurant };