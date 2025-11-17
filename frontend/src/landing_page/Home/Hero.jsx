import React from "react";
import {Link} from "react-router-dom";

function Hero() {
  return (
    <div style={{width: "70%"}} className="mt-5 p-4 d-flex justify-content-center cnt-hero-home container text-center">
      <div className="row d-flex justify-content-center">
        <img className="image-hero-home" src="/homeHero.png"></img>
        <h1 className="mt-4 fs-4">Invest in everything</h1>
        <p className ="fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
       <Link to="/Signup"><button style={{ width : "30%", backgroundColor : "#387ED1"}} className="mt-3 cus-button rounded">Sign up for free </button></Link>
      </div>
    </div>
  );
}

export default Hero;
