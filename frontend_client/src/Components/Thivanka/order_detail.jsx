import React from "react";
import "../../Css/Thivanka/order_detail.css";
import Item from "../../Assets/item.jpg";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";

function OrderDetail(props) {
  return (
    <div className="order-detail-container">
      <div className="order-detail-wrapper">
        <div className="order-detail-image">
          <img src={Item} width="90px" alt="product" />
        </div>
        <div className="order-detail">
          <div className="order-detail-header">
            <div className="order-detail-header-status">
              <StoreMallDirectoryIcon fontSize="small" color="info" />{" "}
              <p
                style={{
                  maxWidth: "30%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  cursor: "pointer",
                }}
              >
                CHFRPU Official Store
              </p>
              <p style={{ marginLeft: "20%",color:"green" }}>{props.status}</p>
            </div>
            <div className="order-detail-header-orddetails">
              <p> Order Date : 2022.05.27</p> <p>Order ID : 102365489</p>
            </div>
          </div>

          <div className="order-body">
            <div style={{ width: "75%" }}>
              <h3>Wooden Planter small</h3>
              <p
                style={{
                  marginTop: "5px",
                  fontSize: "13px",
                  fontWeight: "500",
                  marginLeft: "5px",
                }}
              >
                4 Items
              </p>
              <p
                style={{
                  marginTop: "5px",
                  fontSize: "13px",
                  fontWeight: "400",
                  marginLeft: "5px",
                }}
              >
                US $100 x 4
              </p>
            </div>
            <div style={{ width: "25%", paddingTop: "10px" }}>
              <p
                style={{ fontWeight: "500", fontSize: "13px", color: "orange" }}
              >
                Total: US $400.00
              </p>
              {props.delete && (
                <button className="order-delete-btn">Delete</button>
              )}
              {props.review && (
                <button className="order-delete-btn">Review</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
