import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
    const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodha-clone-backend-1svz.onrender.com/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "https://zerodha-clone-dashboard-oq0nsgeoj.vercel.app/holdings";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };
    return (
        <div style={{marginTop : "5rem"}} className="container cnt-signup text-center">
            <div className="row">
                <p className="fs-3 fw-semibold">Open a free demat and trading account online</p>
                <p className="fs-5">Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-6 mt-5"><img style={{width : "100%"}} src="/signup.png"></img></div>
                <div style={{marginTop : "2rem"}} className="col-6 mt-5 login-styles">
                    <p className="fw-semibold fs-4">Signup now</p>
                    <p style={{color : "grey"}} >Or track your existing application</p>
                    <form onSubmit={handleSubmit}>
                    <input name="username" onChange={handleOnChange} style={{backgroundColor : "white",height : "3rem",width : "22rem",border : "1px solid grey"}} placeholder="Enter Username" className="mt-3 fs-5 rounded input-style" type="text"></input>
                    <input name="email" onChange={handleOnChange} style={{backgroundColor : "white",height : "3rem",width : "22rem",border : "1px solid grey"}} placeholder="Enter Email" className="mt-3 fs-5 rounded input-style" type="email"></input>
                    <input name="password" onChange={handleOnChange} style={{backgroundColor : "white",height : "3rem",width : "22rem",border : "1px solid grey"}} placeholder="Enter Password" className="mt-3 fs-5 rounded input-style" type="password"></input>
                    <button type="submit" className="btn btn-primary mt-4">Signup</button>
                    
                    <p style={{fontSize: "0.8rem"}} className="mt-4">By proceeding, you agree to the Zerodha <a href="#" className="anchor-tag">terms</a> & <a href="#" className="anchor-tag">privacy policy</a></p>
                    <p style={{fontSize: "0.8rem"}} className="mt-2">Already have an account? <Link to="/login" className="anchor-tag">Click here</Link></p>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default Signup;
