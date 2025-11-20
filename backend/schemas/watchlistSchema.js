const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema({
    name: String,
    price: Number,
    avg : Number,
    percent: String,
    isDown: Boolean,
});

module.exports = mongoose.model("Watchlist", watchlistSchema);
