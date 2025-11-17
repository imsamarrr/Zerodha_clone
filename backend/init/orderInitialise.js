const mongoose = require("mongoose");
const orderModel = require("../schemas/orderSchema");

mongoose
  .connect("mongodb+srv://imsamarr_:samar2006@zerodhaclonecluster.jvwhycr.mongodb.net/Zerodha?appName=ZerodhaCloneCluster")
  .then(console.log("DB connected"))
  .catch((err) => {
    console.log(err);
  });

const orderData = [];

let initDb = async () => {
  await orderModel.insertMany(orderData);
  console.log("Data initialised successfully");
};

initDb();
