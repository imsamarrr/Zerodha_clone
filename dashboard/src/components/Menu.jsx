import React from "react";
import { Link } from "react-router-dom";
import {useState} from "react";
import Usermenu from "./Usermenu";

const Menu = ({name,logout}) => {
  const[selectedItem,setSelectedItem] = useState(0);
  const[userMenu,setUserMenu] = useState(false);

  const handleMenuClick = (index)=>{
    setSelectedItem(index);
  }

  const dropUserMenu = ()=>{
    setUserMenu(!userMenu);
  }

  const menuclass = "menu";
  const activemenuclass = "menu selected";

  return (
    <div className="menu-container">
      <Link to="/">
      <img src="logo.png" style={{ width: "50px" }} />
      </Link>
      <div className="menus">
        <ul className="menu-items">
          <li>
            <Link style={{ textDecoration: "none",color : "black"}} to="/" onClick={()=>{handleMenuClick(0)}}>
              <p className={selectedItem ==0?activemenuclass : menuclass}>Dashboard</p>
            </Link>
          </li>
          {/* <li>
            <Link style={{ textDecoration: "none",color : "black" }} to="/orders" onClick={()=>{handleMenuClick(1)}}>
              <p className={selectedItem ==1?activemenuclass : menuclass}>Stocks</p>
            </Link>
          </li> */}
          <li>
            <Link style={{ textDecoration: "none",color : "black" }} to="/holdings" onClick={()=>{handleMenuClick(2)}}>
              <p className={selectedItem ==2?activemenuclass : menuclass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none",color : "black" }} to="/positions" onClick={()=>{handleMenuClick(3)}}>
              <p className={selectedItem ==3?activemenuclass : menuclass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none",color : "black" }} to="/funds" onClick={()=>{handleMenuClick(4)}}>
              <p className={selectedItem ==4?activemenuclass : menuclass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none",color : "black" }} to="/app" onClick={()=>{handleMenuClick(5)}}>
              <p className={selectedItem ==5?activemenuclass : menuclass}>App</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={dropUserMenu}>
          <div className="avatar">ZU</div>
          <p className="username">{name}</p>
          {userMenu && <Usermenu logout={logout}/>}
        </div>
      </div>
    </div>
  );
};

export default Menu;
