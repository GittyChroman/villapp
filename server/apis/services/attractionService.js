const attractionController = require("../controllers/attractionController");

const getAllAttraction = async () => {
    return await attractionController.getAllAttraction();
};

module.exports = { getAllAttraction };