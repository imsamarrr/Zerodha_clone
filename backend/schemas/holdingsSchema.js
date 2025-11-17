const mongoose = require("mongoose");
const holdingSchema = mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

const holdingModel = new mongoose.model("holdings",holdingSchema);

module.exports = holdingModel;