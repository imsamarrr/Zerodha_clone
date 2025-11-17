import React from "react";

function Charges() {
  return (
    <div style={{marginTop : "4rem"}} className="container d-flex justify-content-center align-items-center">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-3 d-flex flex-column justify-content-center align-items-center">
          <img src="/pricing0.svg"></img>
          <p className="mt-3 fs-4 fw-semibold">Free equity delivery</p>
          <p className="mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-3 d-flex flex-column justify-content-center align-items-center">
          <img src="/intradayTrades.svg"></img>
          <p className="mt-3 fs-4 fw-semibold">Intraday and F&O trades</p>
          <p className="mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-3 d-flex flex-column justify-content-center align-items-center">
          <img src="/pricing0.svg"></img>
          <p className="mt-3 fs-4 fw-semibold">Free direct MF</p>
          <p className="mt-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Charges;
