import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        if(document.cookie.includes("token=")){
          return;
        }

        navigate("/login");
        return; 
      }
      const { data } = await axios.post(
        "http://localhost:3002/",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      if(status){
        console.log(status);
        // toast(`Hello ${data.user}`,{
        //   position : "top-right",
        // });
      }else{
        removeCookie("token"),navigate("/login");
      };
      // return status
      //   ? toast(`Hello ${data.user}`, {
      //       position: "top-right",
      //     })
      //   : (removeCookie("token"), navigate("/login"));
    };

    verifyCookie();
  }, [cookies.token, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };
  return (
    <>
      <TopBar username={username} logout={Logout} />
      <Dashboard />
    </>
  );
};

export default Home;
