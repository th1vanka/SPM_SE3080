import React from 'react'
import "../../css/Thivanka/order.css";
import "../../css/common.css";
import NavBar from '../../Components/Thivanka/nav_bar';
import OrderTable from "../../Components/Thivanka/order_table";
 
function Orders() {
  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container clearfix">
        <div className="order-section-one-container ">
          <div className="order-section-one-left ">
            <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
              Recent Orders
            </h3>
            <p
              style={{
                marginLeft: "10px",
                color: "red",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              20
            </p>
          </div>
          <div className="order-section-one-right">
            <input type="search" placeholder="Search" className="search-box" />
          </div>
        </div>
        <OrderTable />
      </div>
    </div>
  );
}

export default Orders