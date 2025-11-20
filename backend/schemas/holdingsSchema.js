const mongoose = require("mongoose");
const holdingSchema = mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
    }
});

const holdingModel = new mongoose.model("holdings",holdingSchema);

module.exports = holdingModel;