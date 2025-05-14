const mongoose = require("mongoose");

const attractionSchema = new mongoose.Schema({
    collectionName:{type:String,required: true},
    name: { type: String, required: true },
    area: { type: String },
    pictures: [{ type: String }],
    descriptions: { type: String },

}, { timestamps: true });

const Attraction = mongoose.model("Attraction", attractionSchema);
module.exports = Attraction;

