const mongoose = require("mongoose");
const positionModel = require("../schemas/positionSchema");

mongoose
  .connect(
    "mongodb+srv://imsamarr_:samar2006@zerodhaclonecluster.jvwhycr.mongodb.net/Zerodha?appName=ZerodhaCloneCluster"
  )
  .then(console.log("DB connected"))
  .catch((err) => {
    console.log(err);
  });

const positionsData = [
  {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
];

let initDb = async () => {
  await positionModel.deleteMany({});
  await positionModel.insertMany(positionsData);
  console.log("Data position initialised successfully");
};

initDb();
