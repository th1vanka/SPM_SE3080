import React from "react";
import "../../css/Thivanka/order_graph.css";

function OrderGraph() {
  return (
    <div>
      <div className="order-section-two-container ">
        <div className="order-table-header-col-1">Order ID</div>
        <div className="order-table-header-col-2">Date</div>
        <div className="order-table-header-col-3">Location</div>
        <div className="order-table-header-col-4">Amount</div>
      </div>
      <div className="order-section-three-container ">
        <GraphRow />
        <GraphRow />
        <GraphRow />
        <GraphRow />
      </div>
    </div>
  );
}

export default OrderGraph;

function GraphRow() {
    return (
      <div className="order-table-row">
        <div className="order-table-col-1">6318cb0974eb04a509c0ddca</div>
        <div className="order-table-col-2">2022.05.27</div>
        <div className="order-table-col-3">No 21,Saparamadu Place,Waragoda,Kelaniya,Sri Lanka</div>
        <div className="order-table-col-4">Rs 120,000.00</div>
      </div>
    );
}
