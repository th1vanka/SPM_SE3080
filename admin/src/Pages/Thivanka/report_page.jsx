import React, { useEffect, useState } from "react";
import "../../css/common.css";
import "../../css/Thivanka/report.css";
import NavBar from "../../Components/Thivanka/nav_bar";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import axios from "axios";

function Report() {
  const [graph, setGraphDetails] = useState([]);
  const [graph2, setGraph2Details] = useState([]);
  const [subTotal, setSubTotal] = useState({});
  const [pendingOrderTotal, setPendingOrderTotal] = useState({});
  const [orderCount, setOrderCount] = useState({});
    const [pendingOrdersCount, setPendingOrderCount] = useState({});

  function graphData() {
    return new Promise((resolve) => {
      axios
        .get("http://localhost:8000/client/summery/order")
        .then((res) => {
          if (res.data.status === false) {
            alert(res.data.message);
          } else {
            setGraphDetails(res.data.data);
            resolve(true);
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    });
  }
  function graphData2() {
    return new Promise((resolve) => {
      axios
        .get("http://localhost:8000/client/each-month/order/total")
        .then((res) => {
          if (res.data.status === false) {
            alert(res.data.message);
          } else {
            setGraph2Details(res.data.data);
            resolve(true);
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    });
  }
  function orderTotal() {
    return new Promise((resolve) => {
      axios
        .get("http://localhost:8000/client/annual/orders/sub-total")
        .then((res) => {
          if (res.data.status === false) {
            alert(res.data.message);
          } else {
            setSubTotal(res.data);
            resolve(true);
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    });
  }
    function annualOrderCount() {
      return new Promise((resolve) => {
        axios
          .get("http://localhost:8000/client/annual/orders/count")
          .then((res) => {
            if (res.data.status === false) {
              alert(res.data.message);
            } else {
              setOrderCount(res.data);
              resolve(true);
            }
          })
          .catch((err) => {
            alert(err.message);
          });
      });
  }
  
      function pendingOrderIncome() {
        return new Promise((resolve) => {
          axios
            .get("http://localhost:8000/client/pending/orders/sub-total")
            .then((res) => {
              if (res.data.status === false) {
                alert(res.data.message);
              } else {
                setPendingOrderTotal(res.data);
                resolve(true);
              }
            })
            .catch((err) => {
              alert(err.message);
            });
        });
  }
  function pendingOrderCount() {
    return new Promise((resolve) => {
      axios
        .get("http://localhost:8000/client/pending/orders/count")
        .then((res) => {
          if (res.data.status === false) {
            alert(res.data.message);
          } else {
            setPendingOrderCount(res.data);
            resolve(true);
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    });
  }

  

  useEffect(() => {
     async function callFunc() {
       await graphData();
       await graphData2();
       await orderTotal();
       await annualOrderCount();
       await pendingOrderIncome();
       await pendingOrderCount();
     } 
    callFunc();
  }, []);

  const data01 = [
    { name: "Completed Orders", value: 400 },
    { name: "Cancelled Orders", value: 300 },
  ];

  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container clearfix">
        <div className="report-header-container">
          <div className="report-header-section-wrapper">
            <div style={{ width: "30%", textAlign: "end" }}>
              <DepartureBoardIcon fontSize="large" color="success" />
            </div>
            <div style={{ width: "70%", textAlign: "center" }}>
              <p className="report-header-answer">{orderCount.count}</p>
              <p className="report-header-question">Total Completed Orders</p>
            </div>
          </div>
          <div className="report-header-section-wrapper">
            <div style={{ width: "30%", textAlign: "center" }}>
              <DepartureBoardIcon fontSize="large" color="success" />
            </div>
            <div style={{ width: "70%", textAlign: "start" }}>
              <p className="report-header-answer">Rs {subTotal.total}</p>
              <p className="report-header-question">Annual Total Income</p>
            </div>
          </div>
          <div className="report-header-section-wrapper">
            <div style={{ width: "30%", textAlign: "end" }}>
              <DepartureBoardIcon fontSize="large" color="warning" />
            </div>
            <div style={{ width: "70%", textAlign: "center" }}>
              <p className="report-header-answer2">
                {pendingOrdersCount.count}
              </p>
              <p className="report-header-question">Total Pending Orders</p>
            </div>
          </div>
          <div className="report-header-section-wrapper">
            <div style={{ width: "30%", textAlign: "center" }}>
              <DepartureBoardIcon fontSize="large" color="warning" />
            </div>
            <div style={{ width: "70%", textAlign: "start" }}>
              <p className="report-header-answer2">
                Rs {pendingOrderTotal.total}
              </p>
              <p className="report-header-question">Pending Order Income</p>
            </div>
          </div>
        </div>
        <div className="report-graph-container">
          <div className="report-graph-section-wrapper1">
            <h5 style={{ color: "gray" }}>Annual Order Rate </h5>
            <ResponsiveContainer width="100%" height="80%">
              <LineChart
                width={500}
                height={300}
                data={graph}
                margin={{
                  top: 5,
                  right: 35,
                  left: 0,
                  bottom: 10,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Orders"
                  stroke="green"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="report-graph-section-wrapper2 ">
            <h5 style={{ color: "gray" }}>Test heading</h5>
            <ResponsiveContainer width="100%" height="80%">
              <PieChart>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data01}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#032A3E"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="report-graph-container">
          <div className="report-graph-section-wrapper3">
            <h5 style={{ color: "gray" }}>Monthly Income (Rs 0.00)</h5>
            <ResponsiveContainer width="100%" height="80%">
              <AreaChart
                width={500}
                height={1500}
                data={graph2}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Total"
                  stroke="rgb(0, 0, 0)"
                  fill="#032A3E"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
