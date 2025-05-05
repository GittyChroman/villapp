const mongoose = require("mongoose");

const attractionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    area: { type: String },
    pictures: [{ type: String }],
    description: { type: String },

}, { timestamps: true });

const Attraction = mongoose.model("Attraction", attractionSchema);
module.exports = Attraction;

