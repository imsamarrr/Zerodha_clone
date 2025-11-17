const mongoose = require("mongoose");
const positionSchema = mongoose.Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

const positionModel = new mongoose.model("positions",positionSchema);

module.exports = positionModel;