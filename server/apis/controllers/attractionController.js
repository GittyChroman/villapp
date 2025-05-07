const Attraction = require("../../models/attractionModel")

const getAllAttraction = async () => {

    try {
        const attraction = await Attraction.find();
        return attraction

    } catch (error) {
        console.error("Error fetching attraction:", error);
        throw error;

    }
};
const getAllSearchResults = async () => {
    try {
        const attraction = await Attraction.find({
            $or: [
                { title: regex },
                { description: regex }
            ]
        });
        return attraction;

    } catch (error) {
        console.error("Error fetching attraction:", error);
        throw error;

    }
}; 


module.exports = { getAllAttraction,getAllSearchResults};