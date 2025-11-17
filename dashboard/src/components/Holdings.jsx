import React from "react";
// import {holdings} from "../data/data";
import axios from "axios";
import {useState,useEffect} from "react";
const Holdings = () => {
  const[allHoldings,setAllHoldings] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3002/allHoldings").then((res)=>{
      setAllHoldings(res.data);
    });
  }, []);

  const totalInvestment = ()=>{
    return allHoldings.reduce((total,items)=>{
      return total + items.avg*items.qty;
    },0)
  }
  const investments = totalInvestment();
  const currValue_total = allHoldings.reduce((total,items)=>{
    return total + items.price*items.qty;
  },0);

  const profit = allHoldings.reduce((total,items)=>{
        const difference = currValue_total - investments;
        return difference;
    },0)

  const proPercent = allHoldings.reduce((total,items)=>{
    const percent = (currValue_total - investments)/investments * 100;
    return percent;
  },0);
  
  const format = (proPercent)=>{
    if(proPercent < 0){
      return `-${proPercent.toFixed(2)}`;
    }else {
      return `+${proPercent.toFixed(2)}`;
    }
  }

  let formatted_Value = format(proPercent);
  return (
    <>
      <h3 className="title">Holdings (13)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
        </table>
      </div>
      {allHoldings.map((data,index)=>{
        const currVal = data.price * data.qty;
        const isProfit = (currVal - data.avg * data.qty) >=0.0;
        const profitClass = isProfit ? "profit" : "loss";
        const lossClass = data.isLoss  ?"loss" : "profit";

        return (
          <div className="order-table">
          <table>
          <tr key={index}>
            <td>{data.name}</td>
            <td>{data.qty}</td>
            <td>{data.avg.toFixed(2)}</td>
            <td>{data.price}</td>
            <td>{currVal}</td>
            <td className={profitClass}>{(currVal - data.avg * data.qty).toFixed(2)}</td>
            <td className={profitClass}>{data.net}</td>
            <td className={lossClass}>{data.day}</td>
          </tr>
          </table>
          </div>
        )
      })}
      <div className="row">
        <div className="col">
          <h5>
            {investments.toLocaleString("en-IN")}<span></span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {currValue_total.toLocaleString("en-IN")}<span></span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>{profit.toLocaleString("en-IN")}({formatted_Value})</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
