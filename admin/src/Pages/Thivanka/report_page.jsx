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
} from "recharts";
import axios from "axios";

function Report() {
  const [graph, setGraphDetails] = useState([]);

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

  


  async function callFunc() {
    const graph = await graphData();
  }

  useEffect(() => {
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
              <p className="report-header-answer">100000</p>
              <p className="report-header-question">Total Completed Orders</p>
            </div>
          </div>
          <div className="report-header-section-wrapper">
            <div style={{ width: "30%", textAlign: "end" }}>
              <DepartureBoardIcon fontSize="large" color="success" />
            </div>
            <div style={{ width: "70%", textAlign: "center" }}>
              <p className="report-header-answer">Rs 100000.00</p>
              <p className="report-header-question">
                Total Completed Order Amount
              </p>
            </div>
          </div>
          <div className="report-header-section-wrapper">
            <div style={{ width: "30%", textAlign: "end" }}>
              <DepartureBoardIcon fontSize="large" color="error" />
            </div>
            <div style={{ width: "70%", textAlign: "center" }}>
              <p className="report-header-answer2">100000</p>
              <p className="report-header-question">Total Cancelled Orders</p>
            </div>
          </div>
          <div className="report-header-section-wrapper">
            <div style={{ width: "30%", textAlign: "end" }}>
              <DepartureBoardIcon fontSize="large" color="error" />
            </div>
            <div style={{ width: "70%", textAlign: "center" }}>
              <p className="report-header-answer2">Rs 100000.00</p>
              <p className="report-header-question">
                Total Cancelled Order Amount
              </p>
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
      </div>
    </div>
  );
}

export default Report;
