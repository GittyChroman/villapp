const Restaurant = require("../../models/restaurantModel")

const getAllRestaurant = async () => {

    try {
        const restaurant = await Restaurant.find();
        return restaurant

    } catch (error) {
        console.error("Error fetching restaurant:", error);
        throw error;

    }
};
const getAllSearchResults = async () => {
    try {
        const restaurant = await Restaurant.find({
            $or: [
                { title: regex },
                { description: regex }
            ]
        });
        return restaurant;

    } catch (error) {
        console.error("Error fetching restaurant:", error);
        throw error;

    }
}; 


module.exports = { getAllRestaurant ,getAllSearchResults};