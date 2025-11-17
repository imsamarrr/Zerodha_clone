import React from "react";

function Teams() {
  return (
    <div className="container mt-5 cnt-about text-center">
      <div className="row">
        <p className="pb-5 fs-4 fw-semibold">People</p>
      </div>
      <div className="row">
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <div className="pic"></div>
          <p className="mt-3 mb-2">Samardeep Singh</p>
          <p>Web Dev</p>
        </div>
        <div style={{paddingRight : "3rem"}} className="col-6 mt-3 random-xyz-about">
          <p>
            Samar bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC)
          </p>
          <p>Playing basketball is his zen.</p>
        </div>
      </div>
    </div>
  );
}

export default Teams;
