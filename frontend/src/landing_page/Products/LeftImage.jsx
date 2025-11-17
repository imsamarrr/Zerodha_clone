import React from "react";

function LeftImage() {
  return (
    <div className="container cnt-products mt-5">
      <div className="row">
        <div className="col-6">
          <img src="/kite.png"></img>
        </div>
        <div className="col-6 d-flex flex-column justify-content-center">
          <p className="fs-4 fw-semibold">Kite</p>
          <p className="">
            Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices.
          </p>
          <div className="row">
            <div className="col-3"><a href="#" className="anchor-tag">Try demo <i class="fa-solid fa-arrow-right"></i></a></div>
            <div className="col-9"><a href="#" className="anchor-tag">Learn more <i class="fa-solid fa-arrow-right"></i></a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;
