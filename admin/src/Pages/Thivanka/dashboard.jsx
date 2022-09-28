import React from "react";
import NavBar from "../../Components/Thivanka/nav_bar";
import "../../css/Thivanka/dashboard.css";
import "../../css/common.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Chart from "../../Components/Thivanka/chart";

function Dashboard() {
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
              <p>100,000</p>
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
              <h4>Summery</h4>
            </center>
            <div>
              <h4>Summery</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
