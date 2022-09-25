import React, { useState,useEffect } from "react";
import "../../Css/Thivanka/shopping_cart.css";
import NavBar from "../../Components/Thivanka/nav_bar";
import HomeHeader from "../../Components/Thivanka/home_header";
import ShoppingCartItems from "../../Components/Thivanka/shopping_cart_items";
import EditIcon from "@mui/icons-material/Edit";
import Visa from "../../Assets/visa.png";
import Master from "../../Assets/master.png";
import Paypal from "../../Assets/paypal.png";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Footter from "../../Components/Thivanka/footter";
import axios from "axios";

let price = 0;
function ShoppingCart() {
  const items = [];
  const [total, setTotal] = useState(0);
  const [details, setDetails] = useState([]);

  const reloadHandler = () => {
    axios
      .get("http://localhost:8000/client/cart/item/test@gmail.com")
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/client/cart/item/test@gmail.com")
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    
  }, []);

  const checkHandler = (e) => {
    const { name, checked, value } = e.target;
    let data = { name, value, check: checked };
    items.push(data);

    if (checked === true) {
      price = price + parseInt(value);
    } else {
      price = price - parseInt(value);
    }
    setTotal(price);
  };
  
  const clearCartHandler = () => {
    const confirmBox = window.confirm(
      "Are you sure want to approve this request?"
    );
    if (confirmBox === true) {
      axios
        .get("http://localhost:8000/client/cart/item/test@gmail.com")
        .then((res) => {
          if (res.data.status === true) {
            alert("Cart Clear")
            // window.location.reload(true)
            reloadHandler()
          }
          else {
            alert("Cart Not Clear...");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const proceedHandler = () => {
    if (total === 0) {
      alert("Select an Item")
    }
    else {
        alert(total);
    }
  };

  return (
    <div className="site-main-container">
      <div>
        <NavBar />
      </div>
      <div className="site-body-container">
        <div>
          <HomeHeader />
        </div>
        <div className="site-details-wrapper clearfix">
          <div className="shopping-cart-container">
            <div className="shopping-cart-items-wrapper">
              <div className="shopping-cart-item-count">
                <h3 style={{ float: "left", margin: "10px" }}>
                  Shopping Cart({details.length})
                </h3>
                <button className="cart-clean-btn" onClick={clearCartHandler}>
                  {" "}
                  Clear Cart <DeleteOutlinedIcon fontSize="small" />
                </button>
              </div>

              {details.map((detail, index) => (
                <ShoppingCartItems
                  key={index}
                  name={detail.itemName}
                  category={detail.category}
                  qty={detail.qty}
                  price={detail.price}
                  checkHandler={checkHandler}
                  email="test@gmail.com"
                  id={detail._id}
                  image={detail.itemURL}
                />
              ))}
            </div>
            <div className="shopping-cart-items-total-wrapper">
              <center>
                <div style={{ fontWeight: "bold", fontSize: "18px" }}>
                  Summary
                </div>
              </center>
              <div className="shopping-cart-items-total-dis">
                <div className="shopping-cart-items-total-dis-question">
                  <p>Total</p>
                  <br />
                  <p>Shipping</p>
                </div>
                <div className="shopping-cart-items-total-dis-answer">
                  <p>Rs {total}.00</p>
                  <br />
                  <p>Rs 250.00</p>
                </div>
              </div>
              <div className="shopping-cart-items-subtotal">
                <div className="shopping-cart-items-total-dis-question">
                  <p>Sub Total</p>
                </div>
                <div className="shopping-cart-items-total-dis-answer">
                  <p>Rs {total + 250}.00</p>
                </div>
              </div>
              <div className="shopping-cart-proceed-btn-wrapper">
                <center>
                  <button
                    className="shopping-cart-proceed-btn"
                    onClick={proceedHandler}
                  >
                    Proceed
                  </button>
                </center>
              </div>

              <div className="payment-edit-section">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  <div style={{ width: "85%", fontWeight: "500" }}>
                    Payment Methods
                  </div>
                  <div style={{ width: "15%", cursor: "pointer" }}>
                    <EditIcon fontSize="small" />
                  </div>
                </div>
                <div
                  style={{ width: "90%", margin: "auto", marginTop: "15px" }}
                >
                  <img src={Visa} alt="visa" width="50px" />
                  <img
                    src={Master}
                    alt="visa"
                    width="40px"
                    style={{ marginLeft: "15px" }}
                  />
                  <img
                    src={Paypal}
                    alt="visa"
                    width="30px"
                    style={{ marginLeft: "15px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footter />
      </div>
    </div>
  );
}

export default ShoppingCart;
