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

const getAllSearchApartment = async (search) => {
    return await apartmentController.getAllSearchApartment(search)
}


module.exports = { getAllApartment, getApartmentByRating, getApartmentById, getAllSearchApartment };
