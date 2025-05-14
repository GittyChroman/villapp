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
const getAllSearchAttraction = async (search) => {
    try {
        const regex = new RegExp(search, "i")
        const attractions = await Attraction.find({
            $or: [
                { name: regex },
                { descriotions: regex },
                { area: regex }
            ]
        });
        return attractions;
    } catch (error) {
        console.error("Error fetching attractions:", error);
        throw error;

    }
};



module.exports = { getAllAttraction,getAllSearchAttraction};