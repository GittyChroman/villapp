const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    collectionName:{type:String,required: true},
    name: { type: String, required: true },
    address: {
        city: { type: String, required: true },
        street: { type: String, required: true }
    },
    type: { type: String, required: true },
    pictures: [{ type: String }],
    descriptions: { type: String, required: true }

}, { timestamps: true });

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;

