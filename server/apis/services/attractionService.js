const attractionController = require("../controllers/attractionController");

const getAllAttraction = async () => {
    return await attractionController.getAllAttraction();
};
const getAllResultsAttraction = async (results) => {
    return await attractionController.getAllAttraction(results);

}


module.exports = { getAllAttraction, getAllResultsAttraction };