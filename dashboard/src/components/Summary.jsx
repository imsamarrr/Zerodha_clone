import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
const Summary = () => {
  const[allHoldings,setAllHoldings] = useState([]);

  useEffect(()=>{
    axios.get("https://zerodha-clone-backend-1svz.onrender.com/allHoldings").then((res)=>{
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
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              {profit.toFixed(2)} <small>{formatted_Value}</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{currValue_total.toFixed(2)}</span>{" "}
            </p>
            <p>
              Investment <span>{investments}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
