import react from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const BuyStockWindow = ({ uuid, onClose, stock }) => {
  const [stockQuantity, setStockQuantity] = useState(0);
  const [stockPrice, setStockPrice] = useState(stock.price);
  const handleBuyClick = async () => {
    try {
      // const res = await axios.post("https://zerodha-clone-backend-1svz.onrender.com/newOrder", {
      //   id : uuid,
      //   name: stock.name,
      //   qty: stockQuantity,
      //   price: (stockQuantity * stockPrice).toFixed(2),
      //   avg : stock.avg,
      //   mode: "Buy",
      // });

      const {data} = await axios.post("https://zerodha-clone-backend-1svz.onrender.com/",{},{withCredentials : true});
      let {curruserId} = data;

      const allHoldings = await axios.get("https://zerodha-clone-backend-1svz.onrender.com/allholdings");
      const namematch = allHoldings.data.find(
        (items) => items.name === stock.name && items.userId === curruserId
      );

      
      const mode = namematch ? "Update" : "Buy";
      const buyData = {
        id: uuid,
        name: stock.name,
        qty: stockQuantity,
        price: (stockQuantity * stockPrice).toFixed(2),
        avg: stock.avg,
        mode: mode,
        curruserId : curruserId,
      };
      if (namematch) {
        const res = await axios.post(
          `https://zerodha-clone-backend-1svz.onrender.com/buyorder/${mode}`,
          buyData
        );
        onClose();
        console.log("Order Updated");
        alert(
          `${stockQuantity} Shares of ${stock.name} are bought and updated in holdings`
        );
      } else {
        const res = await axios.post(`https://zerodha-clone-backend-1svz.onrender.com/newOrder`, buyData);
        onClose();
        console.log("Order created");
        console.log(curruserId);
        alert(`${stockQuantity} Shares of ${stock.name} are bought`);
      }
    } catch (err) {
      onClose();
      console.log("Error:", err);
      alert("There is some problem while buying stock");
    }
  };
  return (
    <div className="container buy-cnt" draggable="true">
      <div className="inputs">
        <fieldset>
          <div className="qty">
            <label htmlFor="qty">Qty.</label>
            <input
              type="text"
              placeholder="Enter Qty."
              id="qty"
              name="qyt"
              onChange={(e) => setStockQuantity(e.target.value)}
            ></input>
          </div>
          <div className="price">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              placeholder={stockQuantity * stock.price}
              name="price"
              onChange={(e) => setStockPrice(e.target.value)}
              id="price"
              value={stockQuantity * stock.price}
              readOnly
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
              onClick={() => onClose()}
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
