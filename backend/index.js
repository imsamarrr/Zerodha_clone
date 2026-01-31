const express = require("express");
const app = express();
const mongoose = require("mongoose");
const holdingsmodel = require("./schemas/holdingsSchema");
const positionsmodel = require("./schemas/positionSchema");
const watchlistmodel = require("./schemas/watchlistSchema");
const ordersModel = require("./schemas/orderSchema");
const stocksModel = require("./schemas/stockSchema");
const User = require("./schemas/userSchema");
const bcrypt = require("bcrypt");
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const { createSecretToken } = require("./utils/secretToken");
const { userVerification } = require("./middlewares/authMiddleware");
require("dotenv").config();

let PORT = process.env.PORT || 3002;
let URL = process.env.MONGO_URL;
mongoose
  .connect(URL)
  .then(console.log("DB connected"))
  .catch((err) => {
    console.log(err);
  });

app.use(
  cors({
    origin: [
      "http://localhost:5174",
      "https://zerodha-clone-dashboard-flax.vercel.app",
      "https://zerodha-clone-frontend-two.vercel.app",
    ],
    methods: ["GET" , "POST", "PUT" , "DELETE" , "OPTIONS"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/allholdings", async (req, res) => {
  const allholdings = await holdingsmodel.find({});
  res.json(allholdings);
});

app.get("/allStocks", async (req, res) => {
  const allStocks = await stocksModel.find({});
  res.json(allStocks);
});

app.get("/allpositions", async (req, res) => {
  const allpositions = await positionsmodel.find({});
  res.json(allpositions);
});

app.get("/", (req, res) => {
  res.send("Backend");
});

app.post("/", userVerification);

app.get("/allWatchlist", async (req, res) => {
  const allWatchlist = await watchlistmodel.find({});
  res.json(allWatchlist);
});

res.cookie("token", token, {
  httpOnly: true,
  secure: true,        // REQUIRED for HTTPS (Vercel + Render)
  sameSite: "none",    // REQUIRED for cross-origin
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

app.get("/signup", (req, res) => {
  res.send("Here signup form");
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
      success: true,
      newUser,
    });
  } catch (err) {
    console.error(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect Email" });
    }
    if (user.username != username) {
      return res.json({ message: "Incorrect username" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect Password" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      path: "/", // Make cookie available throughout the app
      httpOnly: false, // MUST be false so your Home.jsx can read 'cookies.token'
      secure: false, // MUST be false because you are on localhost (http, not https)
      sameSite: "Lax",
    });
    res.status(201).json({ message: "User logged in", success: true, user });
  } catch (err) {
    console.error(err);
  }
});

app.post("/sellStock/:action", async (req, res) => {
  const { name, sellqty, sellprice, fullySold } = req.body;
  console.log(sellqty);
  console.log(sellprice);
  let parsedqty = parseInt(sellqty);
  let sellpricefixed = sellprice.toFixed(2);

  if (isNaN(parsedqty)) {
    console.error("Received quantity is NaN:", sellqty);
    // Send an error response back to the client
    return res.status(400).json({ message: "Invalid quantity provided." });
  }

  if (!fullySold) {
    let result = await holdingsmodel.findOneAndUpdate(
      { name: name },
      { $inc: { qty: -parsedqty, price: -sellpricefixed } },
      { new: true },
    );
    return res.json({ message: "Partial sale successful", holdings: result });
  } else {
    let result = await holdingsmodel.findOneAndDelete({ name: name });
    return res.json({ message: "Fully sold, holding deleted" });
  }
});

app.post("/buyorder/:action", async (req, res) => {
  const { name, qty, avg, price, curruserId } = req.body;
  let result = await holdingsmodel.findOneAndUpdate(
    { name: name, userId: curruserId },
    { $inc: { qty: qty, price: price } },
    { new: true },
  );
  return res.json({ message: "Holding updates", holdings: result });
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
    console.log(req.body.avg);

    let newHoldings = new holdingsmodel({
      name: req.body.name,
      qty: req.body.qty,
      avg: req.body.avg,
      price: req.body.price,
      net: "Null",
      day: "Null",
      userId: req.body.curruserId,
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
});
