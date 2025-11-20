import React from "react";
// import {holdings} from "../data/data";
import axios from "axios";
import VerticalGraph from "./verticalGraph";
import { useState, useEffect } from "react";
const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // export const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  const [curruserId, setCurruserId] = useState("");

  useEffect(() => {
    let fetchcurruserId = async () => {
      const result = await axios.post(
        "http://localhost:3002/",
        {},
        { withCredentials: true }
      );
      setCurruserId(result.data.curruserId);
    };

    fetchcurruserId();
  });

  const filteredHoldings = Array.isArray(allHoldings)
    ? allHoldings.filter((item) => item.userId === curruserId)
    : [];

  const labels = filteredHoldings.map((items) => items["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: filteredHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const totalInvestment = () => {
    return filteredHoldings.reduce((total, items) => {
      return total + items.avg * items.qty;
    }, 0);
  };
  const investments = totalInvestment();
  const currValue_total = filteredHoldings.reduce((total, items) => {
    return total + items.price * items.qty;
  }, 0);

  const profit = filteredHoldings.reduce((total, items) => {
    const difference = currValue_total - investments;
    return difference;
  }, 0);

  const proPercent = filteredHoldings.reduce((total, items) => {
    const percent = ((currValue_total - investments) / investments) * 100;
    return percent;
  }, 0);

  const format = (proPercent) => {
    if (proPercent < 0) {
      return `-${proPercent.toFixed(2)}`;
    } else {
      return `+${proPercent.toFixed(2)}`;
    }
  };

  let formatted_Value = format(proPercent);
  return (
    <>
      <h3 className="title">Holdings (13)</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
        </table>
      </div>
      {filteredHoldings.map((data, index) => {
        const currVal = data.price * data.qty;
        const isProfit = currVal - data.avg * data.qty >= 0.0;
        const profitClass = isProfit ? "profit" : "loss";
        const lossClass = data.isLoss ? "loss" : "profit";

        return (
          <div className="order-table">
            <table>
              <tbody>
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.qty}</td>
                  <td>{data.avg.toFixed(2)}</td>
                  <td>{data.price}</td>
                  <td>{currVal.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currVal - data.avg * data.qty).toFixed(2)}
                  </td>
                  <td className={profitClass}>{data.net}</td>
                  <td className={lossClass}>{data.day}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
      <div className="row">
        <div className="col">
          <h5>
            {investments.toLocaleString("en-IN")}
            <span></span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {currValue_total.toLocaleString("en-IN")}
            <span></span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>
            {profit.toLocaleString("en-IN")}({formatted_Value})
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
