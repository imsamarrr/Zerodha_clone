import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";
import Home from "./components/Home";
import Signup from "./components/signup";
import Login from "./components/login";
import { CookiesProvider } from "react-cookie";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  </CookiesProvider>
);
