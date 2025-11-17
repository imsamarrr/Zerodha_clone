const express = require("express");
const app = express();
const mongoose = require("mongoose");
const holdingsmodel = require("./schemas/holdingsSchema");
const positionsmodel = require("./schemas/positionSchema");
const watchlistmodel = require("./schemas/watchlistSchema");
const ordersModel = require("./schemas/orderSchema");
const User = require("./schemas/userSchema");
const bcrypt = require("bcrypt");
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const { createSecretToken } = require("./utils/secretToken");
const {userVerification} = require("./middlewares/authMiddleware");
require("dotenv").config();

let PORT = process.env.PORT || 3002;
let URL = process.env.MONGO_URL;

app.use(cors({
    origin: "http://localhost:5174", 
    credentials: true,                 
  }));
app.use(express.json());
app.use(cookieParser()); 
app.use(express.urlencoded({ extended: true }));

app.get("/allholdings", async (req, res) => {
  const allholdings = await holdingsmodel.find({});
  res.json(allholdings);
});

app.get("/allpositions", async (req, res) => {
  const allpositions = await positionsmodel.find({});
  res.json(allpositions);
});

app.get("/",(req, res) => {
  res.send("Backend");
});

app.post("/",userVerification);

app.get("/allWatchlist", async (req, res) => {
  const allWatchlist = await watchlistmodel.find({});
  res.json(allWatchlist);
});

app.get("/orders", async (req, res) => {
  const orders = await ordersModel.find({});
  res.json(orders);
});

app.delete("/deletestock/:name", async (req, res) => {
  try {
    const id = req.params.name;
    let result = await holdingsmodel.findOneAndDelete({ name: id });
    res.json(req.params.name);
    if (!result) {
      console.log("Stock Not Found");
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/signup", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.json({ message: "All feild are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "user already exists" });
    }
    const newUser = await User.create({ username, email, password });
    const token = createSecretToken(newUser._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    return res.status(201).json({
      message: "user signed in successfully",
      sucess: true,
      newUser,
    });
  } catch (err) {
    console.error(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username,email, password } = req.body;
    if (!username || !email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect Email" });
    }
    if(user.username != username){
      return res.json({message : "Incorrect username"});
    }
    const auth = bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect Password" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({ message: "User logged in", success: true, user });
  } catch (err) {
    console.error(err);
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new ordersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    newOrder.save();

    let newHoldings = new holdingsmodel({
      name: req.body.name,
      qty: req.body.qty,
      avg: 0,
      price: req.body.price,
      net: "Null",
      day: "Null",
    });
    newHoldings.save();

    res.send("Order saved");
    console.log(newOrder);
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "Order not saved" });
  }
});

app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}`);
  mongoose
    .connect(URL)
    .then(console.log("DB connected"))
    .catch((err) => {
      console.log(err);
    });
});
