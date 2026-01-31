import react from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const SellStockWindow = ({ uuid, onClose, stock }) => {
  const [stockQuantity, setStockQuantity] = useState(0);
  const [stockPrice, setStockPrice] = useState(0.0);

  const [holdings, setHoldings] = useState([]);
  const getholdings = async () => {
    let res = await axios.get("http://localhost:3002/allholdings");
    setHoldings(res.data);
  };

  useEffect(() => {
    getholdings();
  }, []);

  const onChange = (e)=>{
    let qty = e.target.value;
    setStockQuantity(qty);
    setStockPrice(qty * stock.price);
  }

  let currholding = holdings.find((item) => item.name == stock.name);
  const availableqty = currholding ? currholding.qty : 0;

  const handleSellClick = async () => {
    // try {
    //   const res = await axios.delete(
    //     `http://localhost:3002/deletestock/${stock.name}`
    //   );
    //   console.log(res.data);
    //   onClose(uuid);
    // } catch (err) {
    //   console.log("Error:", err);
    // }
    let sellqty = parseInt(stockQuantity);
    let avaqty = parseInt(availableqty);
    let sellprice = parseInt(stockPrice.toFixed(2));
    if(sellqty <= 0 || isNaN(sellqty)){
      console.log("Error: Please enter a valid quantity.");
      alert("Please enter a valid quantity");
      return;
    }

    if(sellqty > avaqty){
      console.log("Error : Cannot sell more than available stocks");
      alert(`cannot sell ${sellqty}.Available quantity : ${avaqty}`);
      return
    }

    const fullySold = sellqty == avaqty;
    const sellData = {
      name : stock.name,
      sellprice : stockPrice,
      sellqty : sellqty,
      fullySold : fullySold,
    };

    try{
      let endpoint = fullySold ? "deletestock" : "updateholdings";
      const res = await axios.post(`https://zerodha-clone-backend-1svz.onrender.com/${endpoint}`,sellData);
      console.log("Sell order successful :",res.data);
      onClose(uuid);
      getholdings();
    }catch(err){
      console.log("Error processing sell order:",err);
      alert("Failed to process sell order.Check server conneection");
    }
  };

  return (
    <div className="container buy-cnt" draggable="true">
      <div className="inputs">
        <fieldset>
          <div className="qty">
            <label htmlfor="qty">Qty.</label>
            <input
              type="text"
              placeholder="Enter Qty."
              id="qty"
              name="qyt"
              value={stockQuantity}
              onChange={onChange}
            ></input>
            <p style={{ fontSize: "0.7rem" }}>Available Qty: {availableqty}</p>
          </div>
          <div className="price">
            <label htmlfor="price">Price</label>
            <input
              type="text"
              placeholder={stock.price}
              name="price"
              value={stockPrice.toFixed(2)}
              readOnly
              id="price"             
            ></input>
          </div>
        </fieldset>
      </div>
      <div className="buy-margin">
        <div className="items-buymargin">
          <div className="para">
            <p>Margin required $456</p>
          </div>
          <div className="buttons-buy-cancel">
            <button
              style={{ backgroundColor: "rgba(255, 0, 0, 1)", color: "white" }}
              onClick={handleSellClick}
            >
              Sell
            </button>
            <button
              style={{ border: "1px solid grey" }}
              onClick={() => onClose(uuid)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellStockWindow;
