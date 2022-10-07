import React from "react";
import "../../css/Thivanka/order_table.css";
import {useNavigate} from 'react-router-dom'

function OrderTable() {
  return (
    <div>
      <div className="order-section-two-container ">
        <div className="order-table-header-col-1">Order ID</div>
        <div className="order-table-header-col-2">Date</div>
        <div className="order-table-header-col-3">Location</div>
        <div className="order-table-header-col-4">Amount</div>
      </div>
      <div className="order-section-three-container ">
        <TableRow id="6318cb0974eb04a509c0ddca" />
        <TableRow id="6318cb0wwwww04a509c0d111" />
        <TableRow id="6318cb0wwwww04a509c0d333" />
        <TableRow id="6318cb0wwwww04a509c0d222" />
      </div>
    </div>
  );
}

export default OrderTable;

function TableRow(props) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/order/details/${props.id}`);
  }
    return (
      <div className="order-table-row" onClick={clickHandler}>
        <div className="order-table-col-1">{props.id}</div>
        <div className="order-table-col-2">2022.05.27</div>
        <div className="order-table-col-3">No 21,Saparamadu Place,Waragoda,Kelaniya,Sri Lanka</div>
        <div className="order-table-col-4">Rs 120,000.00</div>
      </div>
    );
}
