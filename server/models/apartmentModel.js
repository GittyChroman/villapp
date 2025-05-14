const mongoose = require("mongoose");

const apartmentSchema = new mongoose.Schema({
    collectionName: { type: String, required: true },
    name: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId,required: true, ref: "User"}, 
    area: { type: String },
    address: {
    city: { type: String, required: true },
    street: { type: String, required: true }
},
    rooms: {
    coupleRooms: { type: String, required: true },
    otherRooms: { type: String, required: true }
},
    bads: { type: String, required: true },
    pictures: [{ type: String }],
    descriptions: {
    description: { type: String },
    details: {
        inRooms: { type: String },
        kitchen: { type: String },
        special: { type: String },
        diningRoom: { type: String },
        general: { type: String }
    },
    prices: {
        shabbat: { type: Number },
        week: { type: Number }
    }
},
    rating: { type: Number }
}, { timestamps: true });

const Apartment = mongoose.model("Apartment", apartmentSchema, "apartments");
module.exports = Apartment;

