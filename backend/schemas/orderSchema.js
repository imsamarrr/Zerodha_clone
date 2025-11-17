const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
    name: String,
    qty: Number,
    price: Number,
    mode : String
});

const orderModel = new mongoose.model("order",orderSchema);

module.exports = orderModel;