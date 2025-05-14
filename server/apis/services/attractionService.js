const attractionController = require("../controllers/attractionController");

const getAllAttraction = async () => {
    return await attractionController.getAllAttraction();
};
const getAllSearchAttraction = async (search) => {
    return await attractionController.getAllSearchAttraction(search);

}


module.exports = { getAllAttraction, getAllSearchAttraction }