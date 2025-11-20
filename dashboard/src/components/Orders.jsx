import React from "react";
// import {holdings} from "../data/data";
import axios from "axios";
import VerticalGraph from "./verticalGraph";
import { useState, useEffect } from "react";
import BuyStockWindow from "./BuyStockWindow";
import SellStockWindow from "./SellStockWindow";
import { Tooltip, Grow } from "@mui/material";
const Orders = () => {
  const [allStocks, setAllStocks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allStocks").then((res) => {
      setAllStocks(res.data);
    });
  }, []);
  return (
    <>
      <h3 className="title">Stocks</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Avg. cost</th>
            <th>LTP</th>
          </tr>
        </table>
      </div>
      {allStocks.map((data, index) => {
        return (
          <div className="order-table">
            <table>
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.avg}</td>
                <td>{data.price}</td>
                {/* <Tooltip
                  title="Buy(B)"
                  placement="top"
                  arrowTransitionComponent={Grow}
                >
                  <button onClick={() => openBuyPopup(uuid)} className="buy">
                    Buy
                  </button>
                </Tooltip> */}

                {/* <Tooltip
                  title="Sell(S)"
                  placement="top"
                  arrowTransitionComponent={Grow}
                >
                  <button onClick={() => openSellPopup(uuid)} className="sell">
                    Sell
                  </button>
                </Tooltip> */}
              </tr>
            </table>
          </div>
        );
      })}
    </>
  );
};

export default Orders;
