import react from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    username: "",
    email : "",
    password: "",
  });

  const { username,email,password } = inputValues;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const handleError = (err) => {
    toast.error(err, {
      position: "bottom-left",
    });
  };
  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          ...inputValues,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
        setInputValues({
          ...inputValues,
          username: "",
          email: "",
          password: "",
        });
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ marginTop: "5rem" }} className="container text-center">
      <div className="row">
        <p className="fs-3 fw-semibold">
          Open a free demat and trading account online
        </p>
        <p className="fs-5">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="row d-flex justify-content-center">
        <div style={{ marginTop: "2rem" }} className="col-6 mt-5">
          <p className="fw-semibold fs-4">Login</p>
          <form onSubmit={handleSubmit}>
            <input
              name="username"
              onChange={handleOnChange}
              style={{
                backgroundColor: "white",
                height: "3rem",
                width: "22rem",
                border: "1px solid grey",
              }}
              placeholder="Enter Username"
              className="mt-3 fs-5 rounded"
              type="text"
            ></input>
            <input
              name="email"
              onChange={handleOnChange}
              style={{
                backgroundColor: "white",
                height: "3rem",
                width: "22rem",
                border: "1px solid grey",
              }}
              placeholder="Enter Email"
              className="mt-3 fs-5 rounded"
              type="email"
            ></input>
            <input
              name="password"
              onChange={handleOnChange}
              style={{
                backgroundColor: "white",
                height: "3rem",
                width: "22rem",
                border: "1px solid grey",
              }}
              placeholder="Enter Password"
              className="mt-3 fs-5 rounded"
              type="password"
            ></input>
            <button className="btn btn-primary mt-4">Login</button>

            <p style={{ fontSize: "0.8rem" }} className="mt-4">
              By proceeding, you agree to the Zerodha{" "}
              <a href="#" className="">
                terms
              </a>{" "}
              &{" "}
              <a href="#" className="">
                privacy policy
              </a>
            </p>
            <p style={{ fontSize: "0.8rem" }} className="mt-2">
              Already have an account?{" "}
              <Link to="/login" className="">
                Click here
              </Link>
            </p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Login;
