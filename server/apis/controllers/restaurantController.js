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
const getAllSearchRestaurant = async (search) => {
    try {
        const regex = new RegExp(search, "i")
        const restaurants = await Restaurant.find({
            $or: [
                { name: regex },
                { descriptions: regex },
                { type: regex }
            ]
        });
        return restaurants;
    } catch (error) {
        console.error("Error fetching restaurant:", error);
        throw error;

    }
};


module.exports = { getAllRestaurant ,getAllSearchRestaurant};