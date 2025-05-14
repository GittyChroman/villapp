
const Apartment = require("../../models/apartmentModel")


const getAllApartment = async () => {
    try {

        const apartment = await Apartment.find()
        return apartment

    } catch (error) {
        console.error("Error fetching apartments:", error);
        throw error;

    }
};


const getApartmentByRating = async (Rating) => {
    try {
        const apartment = await Apartment.find({ rating: Rating });
        return apartment
    } catch (error) {
        console.error("Error fetching apartments:", error);
        throw error;

    }
};

const getAllSearchApartment = async (search) => {
    try {
        const regex = new RegExp(search, "i")
        const apartments = await Apartment.find({
            $or: [
                { name: regex },
                { "address.city": regex },
                { area: regex }
            ]
        });
        return apartments;
    } catch (error) {
        console.error("Error fetching apartments:", error);
        throw error;

    }
};

const getApartmentById = async (id) => {
    try {
        const apartment = await Apartment.findById(id)
        return apartment

    } catch (error) {
        console.error("Error fetching apartments:", error);
        throw error;

    }
};


module.exports = { getAllApartment, getApartmentByRating, getApartmentById, getAllSearchApartment };

