const mongoose = require("mongoose");
const stockModel = require("../schemas/stockSchema");

mongoose
  .connect(
    "mongodb+srv://imsamarr_:samar2006@zerodhaclonecluster.jvwhycr.mongodb.net/Zerodha?appName=ZerodhaCloneCluster"
  )
  .then(console.log("DB connected"))
  .catch((err) => {
    console.log(err);
  });

const stockData = [
  { name: "BHARTIARTL", avg: 538.05, price: 541.15 },
  { name: "HDFCBANK", avg: 1383.4, price: 1522.35 },
  { name: "HINDUNILVR", avg: 2335.85, price: 2417.4 },
  { name: "INFY", avg: 1350.5, price: 1555.45 },
  { name: "ITC", avg: 202.0, price: 207.9 },
  { name: "KPITTECH", avg: 250.3, price: 266.45 },
  { name: "M&M", avg: 809.9, price: 779.8 },
  { name: "RELIANCE", avg: 2193.7, price: 2112.4 },
  { name: "SBIN", avg: 324.35, price: 430.2 },
  { name: "SGBMAY29", avg: 4727.0, price: 4719.0 },
  { name: "TATAPOWER", avg: 104.2, price: 124.15 },
  { name: "TCS", avg: 3041.7, price: 3194.8 },
  { name: "WIPRO", avg: 489.3, price: 577.75 },
  { name: "ADANIPORTS", avg: 760.1, price: 815.4 },
  { name: "ADANIENT", avg: 2235.0, price: 2188.5 },
  { name: "BAJAJFINSV", avg: 1450.0, price: 1522.1 },
  { name: "BAJFINANCE", avg: 7200.0, price: 6890.5 },
  { name: "BANKBARODA", avg: 210.4, price: 236.8 },
  { name: "BANDHANBNK", avg: 210.3, price: 198.1 },
  { name: "BEL", avg: 110.5, price: 142.3 },
  { name: "BPCL", avg: 385.2, price: 401.7 },
  { name: "COALINDIA", avg: 240.0, price: 258.8 },
  { name: "DLF", avg: 420.0, price: 452.4 },
  { name: "DIVISLAB", avg: 3320.0, price: 3265.5 },
  { name: "DRREDDY", avg: 5000.0, price: 5224.8 },
  { name: "EICHERMOT", avg: 3150.4, price: 2980.1 },
  { name: "GAIL", avg: 96.2, price: 102.4 },
  { name: "GRASIM", avg: 1850.3, price: 1955.4 },
  { name: "HCLTECH", avg: 1180.2, price: 1245.8 },
  { name: "HEROMOTOCO", avg: 2680.5, price: 2604.1 },
  { name: "HINDALCO", avg: 460.3, price: 485.2 },
  { name: "ICICIBANK", avg: 760.4, price: 903.1 },
  { name: "INDUSINDBK", avg: 1120.4, price: 1082.2 },
  { name: "JSWSTEEL", avg: 680.3, price: 703.5 },
  { name: "LT", avg: 2450.5, price: 2590.3 },
  { name: "MARUTI", avg: 9050.0, price: 9440.1 },
  { name: "NESTLEIND", avg: 22500.0, price: 23880.0 },
  { name: "NTPC", avg: 140.0, price: 157.7 },
  { name: "ONGC", avg: 168.4, price: 176.3 },
  { name: "PIDILITIND", avg: 2380.0, price: 2405.6 },
  { name: "POWERGRID", avg: 226.3, price: 243.4 },
  { name: "SBILIFE", avg: 1260.5, price: 1320.0 },
  { name: "SHREECEM", avg: 23700.0, price: 22650.0 },
  { name: "SIEMENS", avg: 3450.0, price: 3622.3 },
  { name: "SUNPHARMA", avg: 1025.7, price: 1099.4 },
  { name: "TATACONSUM", avg: 725.0, price: 758.2 },
  { name: "TATASTEEL", avg: 110.3, price: 122.2 },
  { name: "TRENT", avg: 1380.0, price: 1485.3 },
  { name: "ULTRACEMCO", avg: 8200.2, price: 8123.5 },
  { name: "VEDL", avg: 265.3, price: 272.8 },
  { name: "YESBANK", avg: 16.5, price: 19.2 },
];

let initDb = async () => {
  await stockModel.deleteMany({});
  await stockModel.insertMany(stockData);
  console.log("stock Data initialised successfully");
};

initDb();
