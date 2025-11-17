import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    const res = await axios.get("http://localhost:3002/orders");
    setOrders(res.data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="orders">
      {orders.length == 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="cnt-orders">
          {orders.map((order, index) => (
            <OrdersItem key={index} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

const OrdersItem = ({ order }) => {
  return (
    <div className="orders-list">
      <div className="order-para">
        <p>ID: {order._id}</p>
      </div>
      <div className="order-name">
        <p><i style={{color : "rgba(255, 0, 0, 1)",fontSize : "0.9rem", transform: "translateY(-2px)"}}className="fa-solid fa-octagon"></i>&nbsp;{order.name}</p>
      </div>
      <div className="order-qty-price">
        <p className="qty-order">Qty.&nbsp;</p>
        <p>{order.qty}</p>
        <p style={{marginLeft : "1.5rem"}} className="price-order">₹{order.price}</p>
      </div>
      <div  style={{ marginTop : "1rem"}}className="price-qty-label">
        <button className="btn-order">Sell</button>
      </div>
    </div>
  );
};

export default Orders;
