import React, { useState, useEffect } from "react";
import NavBar from "../../Components/Thivanka/nav_bar";
import "../../css/Thivanka/dashboard.css";
import "../../css/common.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Chart from "../../Components/Thivanka/chart";
import axios from "axios";

function Dashboard() {
  const [recentOrders, setrecentOrders] = useState();
  const [toBeShippedOrders, setToBeShippedOrders] = useState();
  const [shippedOrders, setShippedOrders] = useState();
  const [completedOrders, setCompletedOrders] = useState();

 

  function recentOrderFunc() {
    return new Promise((resolve) => {
      axios
        .get("http://localhost:8000/client/order/count/Pending")
        .then((res) => {
          if (res.data.status === false) {
            alert(res.data.message);
          } else {
            
            setrecentOrders(res.data.count);
            resolve(true);
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    });
  }
  function toBeShippeOrderFunc() {
    return new Promise((resolve) => {
      axios
        .get("http://localhost:8000/client/order/count/To be shipped")
        .then((res) => {
          if (res.data.status === false) {
            alert(res.data.message);
          } else {
            setToBeShippedOrders(res.data.count);
            resolve(true);
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    });
  }
  function shippedOrderFunc() {
    return new Promise((resolve) => {
      axios
        .get("http://localhost:8000/client/order/count/Shipped")
        .then((res) => {
          if (res.data.status === false) {
            alert(res.data.message);
          } else {
            setShippedOrders(res.data.count);
            resolve(true);
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    });
  }
    function completedOrderFunc() {
      return new Promise((resolve) => {
        axios
          .get("http://localhost:8000/client/order/count/Completed")
          .then((res) => {
            if (res.data.status === false) {
              alert(res.data.message);
            } else {
              setCompletedOrders(res.data.count);
              resolve(true);
            }
          })
          .catch((err) => {
            alert(err.message);
          });
      });
    }

  async function callFunc() {
    await recentOrderFunc();
    await toBeShippeOrderFunc();
    await shippedOrderFunc();
       await completedOrderFunc();
  }

  useEffect(() => {
    callFunc();
  }, []);

  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container clearfix">
        <div className="dash_section_one_container ">
          <div className="dash_section_one_container_header ">
            <h3>Dashboard</h3>
          </div>
          <div className="dash_section_one_container_box ">
            <div className="dash_section_one_container_box_topic ">
              <p style={{ fontSize: "13px", fontWeight: "500", color: "gray" }}>
                Orders
              </p>
              <TrendingUpIcon
                color="success"
                style={{ marginTop: "12px" }}
                fontSize="small"
              />
            </div>
            <div className="dash_section_one_container_box_body ">
              <p>
                {completedOrders +
                  shippedOrders +
                  toBeShippedOrders +
                  recentOrders}
              </p>
            </div>
          </div>
          <div className="dash_section_one_container_box ">
            <div className="dash_section_one_container_box_topic ">
              <p style={{ fontSize: "13px", fontWeight: "500", color: "gray" }}>
                Customers
              </p>
              <PeopleIcon
                color="success"
                style={{ marginTop: "12px" }}
                fontSize="small"
              />
            </div>
            <div className="dash_section_one_container_box_body ">
              <p>50,589</p>
            </div>
          </div>
          <div className="dash_section_one_container_box ">
            <div className="dash_section_one_container_box_topic ">
              <p style={{ fontSize: "13px", fontWeight: "500", color: "gray" }}>
                Shops
              </p>
              <StorefrontIcon
                color="success"
                style={{ marginTop: "12px" }}
                fontSize="small"
              />
            </div>
            <div className="dash_section_one_container_box_body ">
              <p>20,520</p>
            </div>
          </div>
        </div>
        <div className="dash_section_two_container ">
          <div className="graph-wrapper">
            <Chart />
          </div>
          <div className="stat-wrapper">
            <center>
              <h4>Summary</h4>
            </center>
            <div className="stat-summary-section-wraper">
              {" "}
              <div className="stat-summary-section-topic">Recent Products</div>
              <div className="stat-summary-section-answer">10</div>
            </div>
            <div className="stat-summary-section-wraper">
              <div className="stat-summary-section-topic">Recent Orders</div>
              <div className="stat-summary-section-answer">{recentOrders}</div>
            </div>

            <div className="stat-summary-section-wraper">
              <div className="stat-summary-section-topic">
                To Be Shipped Orders
              </div>
              <div className="stat-summary-section-answer">
                {" "}
                {toBeShippedOrders}
              </div>
            </div>
            <div className="stat-summary-section-wraper">
              {" "}
              <div className="stat-summary-section-topic">Shipped Orders</div>
              <div className="stat-summary-section-answer">{shippedOrders}</div>
            </div>
            <div className="stat-summary-section-wraper">
              {" "}
              <div className="stat-summary-section-topic">Completed Orders</div>
              <div className="stat-summary-section-answer">
                {completedOrders}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
