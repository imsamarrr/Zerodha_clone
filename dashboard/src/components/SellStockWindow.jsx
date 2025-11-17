import react from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const SellStockWindow = ({ uuid, onClose, stock }) => {
  const [stockQuantity, setStockQuantity] = useState(0);
  const [stockPrice, setStockPrice] = useState(0.0);

  const [holdings,setHoldings] = useState([]);
  const getholdings = async()=>{
    let res = await axios.get("http://localhost:3002/allholdings");
    setHoldings(res.data);
  }

  useEffect(() => {
      getholdings();
    }, []);

  const handleDeleteClick = async () => {
    try {
      const res = await axios.delete(`http://localhost:3002/deletestock/${stock.name}`);
      console.log(res.data);
      onClose(uuid);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  let currholding = holdings.find((item)=>item.name==stock.name);
  const availableqty = currholding ? currholding.qty : 0;
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
              onChange={(e) => setStockQuantity(e.target.value)}
            ></input>
            <p style={{fontSize : "0.7rem"}}>Available Qty: {availableqty}</p>
          </div>
          <div className="price">
            <label htmlfor="price">Price</label>
            <input
              type="text"
              placeholder={stock.price}
              name="price"
              onChange={(e) => setStockPrice(e.target.value)}
              id="price"
              value={stock.price * stockQuantity}
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
              onClick={handleDeleteClick}
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
