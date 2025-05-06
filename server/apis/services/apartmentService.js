const apartmentController = require("../controllers/apartmentController");



const getAllApartment = async () => {

    return await apartmentController.getAllApartment();
};

const getAllResultsApartment = async (results) => {
    return await apartmentController.getAllSearchResults(results)
}


module.exports = { getAllApartment, getAllResultsApartment };


