const mongoose = require("mongoose");
const watchlistModel = require("../schemas/watchlistSchema");

mongoose
  .connect(
    "mongodb+srv://imsamarr_:samar2006@zerodhaclonecluster.jvwhycr.mongodb.net/Zerodha?appName=ZerodhaCloneCluster"
  )
  .then(console.log("DB connected"))
  .catch((err) => {
    console.log(err);
  });

const watchlistData = [
  {
    name: "INFY",
    price: 1555.45,
    avg: 1620.30,    
    percent: "-1.60%",
    isDown: true,
  },
  {
    name: "ONGC",
    price: 116.8,
    avg: 130.50,    
    percent: "-0.09%",
    isDown: true,
  },
  {
    name: "TCS",
    price: 3194.8,
    avg: 3300.10,       
    percent: "-0.25%",
    isDown: true,
  },
  {
    name: "KPITTECH",
    price: 266.45,
    avg: 240.20,      
    percent: "3.54%",
    isDown: false,
  },
  {
    name: "QUICKHEAL",
    price: 308.55,
    avg: 325.00,    
    percent: "-0.15%",
    isDown: true,
  },
  {
    name: "WIPRO",
    price: 577.75,
    avg: 550.40,     
    percent: "0.32%",
    isDown: false,
  },
  {
    name: "M&M",
    price: 779.8,
    avg: 800.00,        
    percent: "-0.01%",
    isDown: true,
  },
  {
    name: "RELIANCE",
    price: 2112.4,
    avg: 1980.10,        
    percent: "1.44%",
    isDown: false,
  },
  {
    name: "HUL",
    price: 512.4,
    avg: 500.25,    
    percent: "1.04%",
    isDown: false,
  },
  { name: "HDFCBANK", price: 1523.40, avg: 1600.00, percent: "0.84%", isDown: false },
  { name: "ICICIBANK", price: 982.10, avg: 1050.20, percent: "-0.42%", isDown: true },
  { name: "SBIN", price: 624.55, avg: 590.10, percent: "1.12%", isDown: false },
  { name: "AXISBANK", price: 1112.20, avg: 1180.00, percent: "-0.33%", isDown: true },
  { name: "KOTAKBANK", price: 1678.75, avg: 1601.50, percent: "0.20%", isDown: false },
  { name: "HDFCLIFE", price: 588.65, avg: 620.30, percent: "-1.02%", isDown: true },
  { name: "ADANIPORTS", price: 849.30, avg: 775.10, percent: "2.10%", isDown: false },
  { name: "ADANIENT", price: 2433.90, avg: 2550.60, percent: "-0.12%", isDown: true },
  { name: "TATAMOTORS", price: 864.50, avg: 800.30, percent: "3.12%", isDown: false },
  { name: "MARUTI", price: 10234.20, avg: 10000.00, percent: "1.55%", isDown: false },
  { name: "ULTRACEMCO", price: 8545.10, avg: 8800.45, percent: "-0.75%", isDown: true },
  { name: "ASIANPAINT", price: 3044.90, avg: 2980.20, percent: "0.43%", isDown: false },
  { name: "BAJAJFINSV", price: 1630.60, avg: 1710.00, percent: "-1.33%", isDown: true },
  { name: "BAJFINANCE", price: 6830.10, avg: 6600.00, percent: "1.25%", isDown: false },
  { name: "JSWSTEEL", price: 811.75, avg: 845.60, percent: "-0.18%", isDown: true },
  { name: "TATASTEEL", price: 134.40, avg: 120.10, percent: "1.92%", isDown: false },
  { name: "ITC", price: 459.30, avg: 420.00, percent: "0.15%", isDown: false },
  { name: "LT", price: 3585.50, avg: 3640.00, percent: "-0.28%", isDown: true },
  { name: "BPCL", price: 548.10, avg: 520.00, percent: "2.42%", isDown: false },
  { name: "IOC", price: 187.30, avg: 200.00, percent: "-0.05%", isDown: true },
  { name: "HEROMOTOCO", price: 4420.20, avg: 4300.00, percent: "0.48%", isDown: false },
  { name: "BAJAJ-AUTO", price: 6325.60, avg: 6000.50, percent: "1.78%", isDown: false },
  { name: "EICHERMOT", price: 3855.10, avg: 3990.80, percent: "-0.66%", isDown: true },
  { name: "POWERGRID", price: 283.75, avg: 260.10, percent: "0.95%", isDown: false },
  { name: "NTPC", price: 324.10, avg: 300.00, percent: "1.31%", isDown: false },
  { name: "HCLTECH", price: 1722.55, avg: 1800.10, percent: "-0.22%", isDown: true },
  { name: "TECHM", price: 1244.80, avg: 1200.60, percent: "0.78%", isDown: false },
  { name: "LTIM", price: 5288.50, avg: 5200.00, percent: "1.20%", isDown: false },
  { name: "PERSISTENT", price: 5211.40, avg: 5400.00, percent: "-1.18%", isDown: true },
  { name: "COALINDIA", price: 394.15, avg: 360.40, percent: "0.66%", isDown: false },
  { name: "BEL", price: 187.90, avg: 200.50, percent: "-0.55%", isDown: true },
  { name: "HAL", price: 3255.80, avg: 3000.40, percent: "2.75%", isDown: false },
  { name: "IRCTC", price: 922.20, avg: 890.10, percent: "1.05%", isDown: false },
  { name: "DMART", price: 3999.30, avg: 4200.00, percent: "-0.88%", isDown: true },
  { name: "ZOMATO", price: 148.60, avg: 120.40, percent: "3.42%", isDown: false },
  { name: "NYKAA", price: 167.10, avg: 175.30, percent: "-0.14%", isDown: true },
  { name: "PAYTM", price: 412.50, avg: 500.00, percent: "-1.92%", isDown: true },
  { name: "POLYCAB", price: 5802.40, avg: 5600.20, percent: "1.45%", isDown: false },
  { name: "VOLTAS", price: 982.75, avg: 960.00, percent: "0.20%", isDown: false },
  { name: "AMBUJACEM", price: 589.60, avg: 612.10, percent: "-0.38%", isDown: true },
  { name: "PIDILITE", price: 2704.30, avg: 2600.10, percent: "0.74%", isDown: false },
  { name: "DRREDDY", price: 5850.80, avg: 5900.20, percent: "-0.11%", isDown: true },
  { name: "CIPLA", price: 1224.60, avg: 1180.40, percent: "1.33%", isDown: false },
  { name: "SUNPHARMA", price: 1325.40, avg: 1290.10, percent: "0.29%", isDown: false },
  { name: "DIVISLAB", price: 4149.90, avg: 4300.10, percent: "-0.67%", isDown: true },
  { name: "GRASIM", price: 2230.70, avg: 2100.00, percent: "1.89%", isDown: false },
  { name: "HAVELLS", price: 1477.30, avg: 1400.10, percent: "0.90%", isDown: false },
  { name: "DABUR", price: 561.90, avg: 580.60, percent: "-0.24%", isDown: true },
  { name: "BRITANNIA", price: 5201.10, avg: 5100.00, percent: "1.14%", isDown: false }
];

let initDb = async () => {
  await watchlistModel.deleteMany({});
  await watchlistModel.insertMany(watchlistData);
  console.log("Data initialised successfully");
};

initDb();
