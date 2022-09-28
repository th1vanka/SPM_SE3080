import React from "react";
import "../../css/Thivanka/to_be_shipped.css";
import "../../css/common.css";
import NavBar from "../../Components/Thivanka/nav_bar";
import OrderGraph from "../../Components/Thivanka/order_graph";

function ToBeShipped() {
  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container">
        <div className="tobeshipped-section-one-container ">
          <div className="tobeshipped-section-one-left ">
            <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
              To Be Shipped Orders
            </h3>
            <p
              style={{
                marginLeft: "10px",
                color: "red",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              10
            </p>
          </div>
          <div className="tobeshipped-section-one-right">
            <input type="search" placeholder="Search" className="search-box" />
          </div>
        </div>
        <OrderGraph />
      </div>
    </div>
  );
}

export default ToBeShipped;
