import React from "react";
import "../Css/shopping_cart.css";
import Item from "../Assets/item.jpg";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function ShoppingCartItems(props) {

  props.setChecked(true);

  return (
    <div className="shopping-cart-item-container">
      <div className="shopping-cart-item-image clearfix">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{cursor:"pointer",backgroundColor:"orange"}} />
        <center>
          <img
            src={Item}
            alt="item"
            style={{
              width: "110px",
              height: "70px",
              marginTop: "10px",
              borderRadius: "5px",
              marginLeft:"20px"

            }}
          />
        </center>
      </div>
      <div className="shopping-cart-item-name">
        <center>
          <p style={{ fontSize: "14px", marginTop: "3px" }}>{props.name}</p>
        </center>

        <p
          style={{
            fontSize: "15px",
            fontWeight: "500",
            marginTop: "20px",
            marginLeft: "5px",
            color: "orange",
          }}
        >
          Rs {props.price} x {props.qty}
        </p>
      </div>
      <div className="shopping-cart-item-action">
        <DeleteOutlineOutlinedIcon
          fontSize="small"
          className="shopping-cart-item-action-btn"
        />
        <p style={{ fontSize: "16px", marginTop: "52px", color: "#A47148" }}>
          Rs {props.price * props.qty}.00
        </p>
      </div>
    </div>
  );
}

export default ShoppingCartItems;
