import React from "react";
import {Link}  from "react-router-dom";

function Navbar() {
  return (
      <nav style={{paddingRight : "1rem"}} class="navbar navbar-expand-lg bg-body-tertiary sticky-top bg-light">
        <div class="container-fluid">
          <Link style={{width : "5rem"}} class="navbar-brand" to="/">
            <img style={{ width: "100%"}} src="/logozerodha.svg"></img>
          </Link>
          <button
            class="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link anchor-tag-Navbar" to="https://zerodha-clone-dashboard-flax.vercel.app/login">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link anchor-tag-Navbar" to="/About">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link anchor-tag-Navbar"
                  to="/Products"
                >
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link anchor-tag-Navbar" to="/Pricing">
                    Pricing
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link class="nav-link anchor-tag-Navbar" to="/Support">
                    Support
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
