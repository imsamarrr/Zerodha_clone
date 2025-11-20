const mongoose = require("mongoose");
const stockSchema = mongoose.Schema({
    name: String,
    price: Number,
    avg : Number
    // owner : {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : "user",
    //     required: true
    // }
});

const stockModel = new mongoose.model("stock",stockSchema);

module.exports = stockModel;