import React from "react";
import {Link} from "react-router-dom";

function OpenAccount() {
  return (
    <div
      style={{ marginTop: "7rem" }}
      className="d-flex justify-content-center align-items-centere text-center container"
    >
      <div className="row">
        <h1 className="fs-4">Open a Zerodha account</h1>
        <p className="mt-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
         <Link to="/Signup"><button style={{ width : "30%", backgroundColor : "#387ED1"}} className="mt-3 cus-button rounded">Sign up for free </button></Link>
      </div>
    </div>
  );
}

export default OpenAccount;
