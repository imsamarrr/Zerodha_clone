import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./landing_page/Home/HomePage";
import SignupPage from "./landing_page/Signup/SignupPage";
import LoginPage from "./landing_page/Signup/login";
import AboutPage from "./landing_page/About/AboutPage";
import PricingPage from "./landing_page/Pricing/PricingPage";
import SupportPage from "./landing_page/Support/SupportPage";
import ProductsPage from "./landing_page/Products/ProductsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./landingPage.css";
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/Signup" element={<SignupPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/About" element={<AboutPage/>}/>
    <Route path="/Products" element={<ProductsPage/>}/>
    <Route path="/Pricing" element={<PricingPage/>}/>
    <Route path="/Support" element={<SupportPage/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);
