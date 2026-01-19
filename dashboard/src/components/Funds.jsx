import React from "react";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  const [funds,setFunds] = useState(0);
  const [fundsPopup,setFundsPopup] = useState({open : false});
  const openfundsPopup = ()=>{
    setFundsPopup({open : true});
  }
  
  const closefundsPopup = ()=>{
    setFundsPopup({open : false});
  }
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <button onClick={()=>openfundsPopup()} className="btn btn-green">Add funds</button>
        {fundsPopup.open && <FundsWindow onClose={closefundsPopup}/>}
        <Link className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available funds</p>
              <p className="imp colored">{funds}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;

const FundsWindow = ({onClose})=>{

  return (
    <div>
      <div className="container buy-cnt" draggable="true">
        <fieldset>
      <div className="inputs">
          <div className="qty-funds">
            <label htmlFor="funds">Funds</label>
            <input
            className="funds-box"
              type="number"
              placeholder="Enter Amount"
              id="funds"
              name="funds"
              onChange={(e)=>setFunds(e.target.value)}
            ></input>
          </div>
      </div>
          </fieldset>
      <div className="buy-margin">
        <div className="items-buymargin">
          <div className="buttons-buy-cancel">
            <button
              style={{ backgroundColor: "rgb(66, 135, 245)", color: "white" ,width : "100px"}}
            >
              Add funds
            </button>
            <button
              style={{ border: "1px solid grey" }}
              onClick = {()=>onClose()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}