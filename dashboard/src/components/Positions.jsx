import React from "react";
// import { positions } from "../data/data";
import axios from "axios";
import {useState,useEffect} from "react";

const Positions = () => {
  const[allPositions,setAllPositions] = useState([]);

  useEffect(()=>{
    axios.get("https://zerodha-clone-backend-1svz.onrender.com/allPositions").then((res)=>{
      setAllPositions(res.data);
    });
  }, []);
  return (
    <>
      <h3 className="title">Positions (2)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
        </table>

        {allPositions.map((data, index) => {
          const currVal = data.price * data.qty;
          const isProfit = currVal - data.avg * data.qty >= 0.0;
          const lossClass = data.isLoss ? "loss" : "profit";

          return (
            <table className="order-table">
              <tr key={index}>
                <td>{data.product}</td>
                <td>Instrument</td>
                <td>{data.qty}</td>
                <td>{data.avg.toFixed(2)}</td>
                <td>{data.price}</td>
                <td className={isProfit ? "profit" : "loss"}>
                  {(currVal - data.avg * data.qty).toFixed(2)}
                </td>
                <td className={lossClass}>{data.day}</td>
              </tr>
            </table>
          );
        })}
      </div>
    </>
  );
};

export default Positions;
