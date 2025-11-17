import React from "react";
import { Tooltip, Grow } from "@mui/material";
import { useState,useEffect } from "react";
import axios from "axios";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BuyStockWindow from "./BuyStockWindow";
import SellStockWindow from "./SellStockWindow";

const WatchList = () => {

  const [watchlist, setWatchlist] = useState([]);
  const getOrders = async () => {
    const res = await axios.get("http://localhost:3002/allWatchlist");
    setWatchlist(res.data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length}/ 50</span>
      </div>
      <ul className="list">
        {watchlist.map((data, index) => (
          <WatchListItem stock={data} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [buyPopup, setBuyPopup] = useState({ open: false, uuid: null });

  const openBuyPopup = (uuid) => {
    setBuyPopup({ open: true, uuid: uuid });
  };

  const closeBuyPopup = () => {
    setBuyPopup({ open: false, uuid: null });
  };

  const [sellPopup, setSellPopup] = useState({ open: false, uuid: null });

  const openSellPopup = (uuid) => {
    setSellPopup({ open: true, uuid: uuid });
  };

  const closeSellPopup = () => {
    setSellPopup({ open: false, uuid: null });
  };

  const [showWatchListItems, setShowWatchListItems] = useState(false);

  const watchlistMouseEnter = (e) => {
    setShowWatchListItems(true);
  };

  const watchlistMouseLeave = (e) => {
    setShowWatchListItems(false);
  };
  const id = stock._id;
  return (
    <li
      className="list"
      onMouseEnter={watchlistMouseEnter}
      onMouseLeave={watchlistMouseLeave}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDownIcon className="down" />
          ) : (
            <KeyboardArrowUpIcon className="up" />
          )}
          <span style={{ color: "grey", fontWeight: "500" }} className="price">
            {stock.price}
          </span>
        </div>
      </div>
      {showWatchListItems && (
        <WatchListItemsActions
        name={stock.name}
          uuid={id}
          openBuyPopup={openBuyPopup}
          openSellPopup={openSellPopup}
        />
      )}
      {buyPopup.open && (
        <BuyStockWindow
          uuid={id}
          onClose={closeBuyPopup}
          stock={stock}
        />
      )}
      {sellPopup.open && (
        <SellStockWindow
          uuid={id}
          onClose={closeSellPopup}
          stock={stock}
        />
      )}
    </li>
  );
};

const WatchListItemsActions = ({ name,uuid, openBuyPopup, openSellPopup }) => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const res = await axios.get("http://localhost:3002/allHoldings");
        setNames(res.data.map((singledata) => singledata.name));
      } catch (err) {
        console.log("Error:", err);
      }
    };

    fetchNames();
  }, []);

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy(B)" placement="top" arrowTransitionComponent={Grow}>
          <button onClick={() => openBuyPopup(uuid)} className="buy">
            Buy
          </button>
        </Tooltip>
        {names.includes(name) && (
          <Tooltip
            title="Sell(S)"
            placement="top"
            arrowTransitionComponent={Grow}
          >
            <button onClick={() => openSellPopup(uuid)} className="sell">
              Sell
            </button>
          </Tooltip>
        )}
      </span>
      <span>
        <Tooltip
          title="Analytics"
          placement="top"
          arrowTransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlinedIcon className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrowTransitionComponent={Grow}>
          <button className="action">
            <MoreHorizIcon className="more" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
