const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstNme: { type: String, required: true },
    lastNme: { type: String, required: true },
    email: { type: String, required: true, match: [/^\S+@\S+\.\S+$/, 'כתובת האימייל לא תקינה'] },
    password:{ type: String, required: true },
    phone: { type: String, required: true },
    tz: { type: String, required: true }

}, { timestamps: true });

const User = mongoose.model("Restaurant", userSchema);
module.exports = User;