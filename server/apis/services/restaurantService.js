const restaurantController = require("../controllers/restaurantController");

const getAllRestaurant = async () => {
    return await restaurantController.getAllRestaurant();
};
const getAllSearchRestaurant = async (search) => {

    return await restaurantController.getAllSearchRestaurant(search);

};
module.exports = { getAllRestaurant, getAllSearchRestaurant };