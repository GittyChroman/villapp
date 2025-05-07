
const Apartment = require("../../models/apartmentModel")


const getAllApartment = async () => {
    try {

        const apartment = await Apartament.find();
        return apartment

    } catch (error) {
        console.error("Error fetching apartments:", error);
        throw error;

    }
};

const getAllSearchResults = async () => {
    try {
        const apartment = await Apartment.find({
            $or: [
                { title: regex },
                { description: regex }
            ]
        });
        return apartment;

    } catch (error) {
        console.error("Error fetching apartments:", error);
        throw error;

    }
};

module.exports = { getAllApartment, getAllSearchResults };