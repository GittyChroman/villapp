const apartmentController = require("../controllers/apartmentController");

const getAllApartment = async () => {

    return await apartmentController.getAllApartment();
};

const getApartmentByRating = async (rating) => {
    return await apartmentController.getApartmentByRating(rating);
};

const getApartmentById = async (id) => {
    return await apartmentController.getApartmentById(id);
};

const getAllResultsApartment = async (results) => {
    return await apartmentController.getAllSearchResults(results)
}


module.exports = { getAllApartment, getApartmentByRating, getApartmentById, getAllResultsApartment };
