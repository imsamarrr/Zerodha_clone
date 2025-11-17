import React from "react";

function RightImage() {
  return (
    <div className="container cnt-products mt-5">
      <div className="row">
        <div className="col-6 d-flex flex-column justify-content-center">
          <p className="fs-4 fw-semibold">Console</p>
          <p className="">
            The central dashboard for your Zerodha account. Gain insights into
            your trades and investments with in-depth reports and
            visualisations.
          </p>
          <div className="row">
            <div className="col-3">
              <a href="#" className="anchor-tag">
                Learn more <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <img src="/kite.png"></img>
        </div>
      </div>
    </div>
  );
}

export default RightImage;
