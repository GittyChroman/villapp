const { default: mongoose } = require("mongoose")
const Apartment = require("../../models/apartmentModel")

const getAllApartment = async () => {

    try {
        const apartment = await Apartment.find();
        return apartment

    } catch (error) {
        console.error("Error fetching apartments:", error);
        throw error;

    }
};

module.exports = { getAllApartment };