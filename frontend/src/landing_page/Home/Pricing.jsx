import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div style={{ marginTop: "7rem" }} className="col-6">
          <h1 className="mb-4 fs-4">Unbeatable pricing</h1>
          <p className="fs-6">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a className="anchor-tag">See pricing <i class="fa-solid fa-arrow-right"></i> </a>
        </div>
        <div
          style={{ marginTop: "7rem" }}
          className="col-6 d-flex pricing-home-images justify-content-center align-items-center"
        >
          <div className="image-zero">
          <img style={{ width: "50%" }} src="/pricing0.svg"></img>
          <p
            style={{
              fontSize: "0.7rem",
              // transform: "translateX(-22px)",
              opacity: "0.7",
            }}
          >
            Free account opening
          </p>
          </div>
          <div className="image-zero">
          <img style={{ width: "50%" }} src="/pricingEquity.svg"></img>
          <p
            style={{
              fontSize: "0.7rem", 
              // transform: "translateX(-22px)",
              opacity: "0.7",
            }}
          >
            {" "}
            Free equity delivery and direct mutual funds
          </p>
          </div>
          <div className="image-zero">
          <img style={{ width: "50%" }} src="/intradayTrades.svg"></img>
          <p
            style={{
              fontSize: "0.7rem",
              // transform: "translateX(-6px)",
              opacity: "0.7",
            }}
          >
            {" "}
            Intraday and F&O
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
