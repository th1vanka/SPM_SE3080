import React from "react";
import "../Css/shopping_cart.css";
import Item from "../Assets/item.jpg";

function ShoppingCartItems(props) {
     
  return (
    <div className="shopping-cart-item-container">
      <div className="shopping-cart-item-image clearfix">
        <center>
          <img
            src={Item}
            alt="item"
            style={{ width: "70px", height: "40px", marginTop: "5px" }}
          />
        </center>
      </div>
      <div className="shopping-cart-item-name">
        <p style={{ fontSize: "16px", fontWeight: "500", marginTop: "3px" }}>
          {props.name}
        </p>
        <p style={{ fontSize: "14px" }}>{props.category}</p>
      </div>
      <div className="shopping-cart-item-qty">{props.qty}</div>
          <div className="shopping-cart-item-price">Rs {props.price}</div>
    </div>
  );
}

export default ShoppingCartItems;
