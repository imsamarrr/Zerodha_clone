import React from "react";

function Education() {
  return (
    <div style={{ marginTop: "7rem"}} className="d-flex justify-content-center align-items-center container">
      <div className="row">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <img style={{ width: "30vw" }} src="/education.svg"></img>
        </div>
        <div className="col-6">
          <h1 className="fs-4 mb-5">Free and open market education</h1>
          <p className="fs-6">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading
          </p>
          <a className="mt-3 anchor-tag">Varsity <i class="fa-solid fa-arrow-right"></i></a>
          <p className="mt-3 fs-6">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a className="mt-3 anchor-tag">TradingQ/A<i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Education;
