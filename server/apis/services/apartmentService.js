const apartmentController = require("../controllers/apartmentController");

const getAllApartment = async () => {
    return await apartmentController.getAllApartment();
};

module.exports = { getAllApartment };