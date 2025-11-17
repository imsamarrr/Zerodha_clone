import React from "react";
import {Link} from "react-router-dom";
function Universe() {
  return (
    <div
      style={{ marginTop: "5rem" }}
      className="container cnt-signup text-center cnt-products-universe"
    >
      <div className="row">
        <p className="fs-3 fw-semibold">The Zerodha Universe</p>
        <p className="fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mt-5 d-flex justify-content-center align-items-center">
        <div className="col-4">
          <img style={{ width: "80%" }} src="/zerodhaFundhouse.png"></img>
          <p className="mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4">
          <img style={{ width: "80%" }} src="/sensibullLogo.svg"></img>
          <p className="mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4">
          <img style={{ width: "80%" }} src="/goldenpiLogo.png"></img>
          <p className="mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row mt-5 d-flex justify-content-center align-items-center">
        <div className="col-4">
          <img style={{ width: "80%" }} src="/streakLogo.png"></img>
          <p className="mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4">
          <img style={{ width: "80%" }} src="/smallcaseLogo.png"></img>
          <p className="mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4">
          <img style={{ width: "80%" }} src="/dittoLogo.png"></img>
          <p className="mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div className="row mt-4 mb-3">
        <Link to="/Signup"><button style={{ width : "30%", backgroundColor : "#387ED1"}} className="mt-3 cus-button rounded">Sign up for free </button></Link>
      </div>
    </div>
  );
}

export default Universe;
