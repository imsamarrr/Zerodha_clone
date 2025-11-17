import react from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const BuyStockWindow = ({ uuid, onClose, stock }) => {
  const [stockQuantity, setStockQuantity] = useState(0);
  const [stockPrice, setStockPrice] = useState(stock.price);
  const handleBuyClick = async () => {
    try {
      const res = await axios.post("http://localhost:3002/newOrder", {
        id : uuid,
        name: stock.name,
        qty: stockQuantity,
        price: (stockQuantity * stockPrice).toFixed(2),
        mode: "Buy",
      });

      onClose(uuid);
      console.log("Order saved");
    } catch (err) {
      console.log("Error:", err);
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
              onChange={(e) => setStockQuantity(e.target.value)}
            ></input>
          </div>
          <div className="price">
            <label htmlfor="price">Price</label>
            <input
              type="text"
              placeholder={stockQuantity * stock.price}
              name="price"
              onChange={(e) => setStockPrice(e.target.value)}
              id="price"
              value={stockQuantity * stock.price}
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
              style={{ backgroundColor: "rgb(66, 135, 245)", color: "white" }}
              onClick={handleBuyClick}
            >
              Buy
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

export default BuyStockWindow;
