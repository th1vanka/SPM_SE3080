import React, { useState, useEffect } from "react";
import "../../css/Thivanka/shipped.css";
import "../../css/common.css";
import "../../css/Thivanka/order_table.css";
import NavBar from "../../Components/Thivanka/nav_bar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Shipped() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/client/order/Shipped")
      .then((res) => {
        if (res.data.status === false) {
          alert(res.data.message);
        } else {
          setDetails(res.data.data);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
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
              {details.length}
            </p>
          </div>
          <div className="shipped-section-one-right">
            <input type="search" placeholder="Search" className="search-box" />
          </div>
        </div>
        <div className="order-section-two-container ">
          <div className="order-table-header-col-1">Order ID</div>
          <div className="order-table-header-col-2">Date</div>
          <div className="order-table-header-col-3">Location</div>
          <div className="order-table-header-col-4">Contact Number</div>
        </div>
        <div className="order-section-three-container ">
          {details.map((detail, index) => (
            <TableRow
              id={detail._id}
              date={detail.orderDate}
              address={detail.customerAddress}
              contact={detail.customerContact}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
function TableRow(props) {
  const navigate = useNavigate();
  const clickHandler = () => {
    const state = "Completed";
    navigate(`/order/details/${props.id}/${state}`);
  };
  return (
    <div className="order-table-row" onClick={clickHandler}>
      <div className="order-table-col-1">{props.id}</div>
      <div className="order-table-col-2">{props.date}</div>
      <div className="order-table-col-3">{props.address}</div>
      <div className="order-table-col-4">{props.contact}</div>
    </div>
  );
}
export default Shipped;
