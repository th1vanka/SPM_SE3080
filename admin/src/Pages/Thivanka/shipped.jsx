import React from "react";
import "../../css/Thivanka/shipped.css";
import "../../css/common.css";
import NavBar from "../../Components/Thivanka/nav_bar";
import OrderGraph from "../../Components/Thivanka/order_graph";

function Shipped() {
  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container">
        <div className="shipped-section-one-container ">
          <div className="shipped-section-one-left ">
            <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
            Shipped Orders
            </h3>
            <p
              style={{
                marginLeft: "10px",
                color: "red",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              100
            </p>
          </div>
          <div className="shipped-section-one-right">
            <input type="search" placeholder="Search" className="search-box" />
          </div>
        </div>
        <OrderGraph />
      </div>
    </div>
  );
}

export default Shipped;
