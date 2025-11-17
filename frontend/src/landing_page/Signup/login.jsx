import React from 'react'


function login() {
    return (
        <div style={{marginTop : "5rem"}} className="container cnt-signup text-center">
            <div className="row">
                <p className="fs-3 fw-semibold">Open a free demat and trading account online</p>
                <p className="fs-5">Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-6 mt-5"><img style={{width : "100%"}} src="/signup.png"></img></div>
                <div style={{marginTop : "2rem"}} className="col-6 mt-5 login-styles">
                    <p className="fw-semibold fs-4">Login</p>
                    <p style={{color : "grey"}} >Or track your existing application</p>
                    <input style={{backgroundColor : "white",height : "3rem",width : "22rem",border : "1px solid grey"}} placeholder="Enter Username" className="mt-3 fs-5 rounded input-style" type="text"></input>
                    <input style={{backgroundColor : "white",height : "3rem",width : "22rem",border : "1px solid grey"}} placeholder="Enter Password" className="mt-3 fs-5 rounded input-style" type="password"></input>
                    <button className="btn btn-primary mt-4">Login</button>
                    <p style={{fontSize: "0.8rem"}} className="mt-4">By proceeding, you agree to the Zerodha <a href="#" className="anchor-tag">terms</a> & <a href="#" className="anchor-tag">privacy policy</a></p>
                </div>
            </div>
        </div>
    );
}

export default login;
