import React from "react";
import "../Css/shopping_cart.css";
import NavBar from "../Components/nav_bar";
import HomeHeader from "../Components/home_header";
import ShoppingCartItems from "../Components/shopping_cart_items";
import EditIcon from "@mui/icons-material/Edit";
import Visa from "../Assets/visa.png"
import Master from "../Assets/master.png";
import Paypal from "../Assets/paypal.png";
  
function ShoppingCart() {
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
                  Shopping Cart(10)
                </h3>
                <button className="cart-clean-btn">Clean</button>
              </div>
              <ShoppingCartItems
                name="Wooden Planter small"
                category="gardening and planting"
                qty="4"
                price="200.00"
              />
              <ShoppingCartItems
                name="Wooden Planter small"
                category="gardening and planting"
                qty="1"
                price="1000.00"
              />
              <ShoppingCartItems
                name="Wooden Planter small"
                category="gardening and planting"
                qty="2"
                price="500.00"
              />
              <ShoppingCartItems
                name="Wooden Planter small"
                category="gardening and planting"
                qty="5"
                price="2500.00"
              />
              <ShoppingCartItems
                name="Wooden Planter small"
                category="gardening and planting"
                qty="3"
                price="1500.00"
              />
              <ShoppingCartItems
                name="Wooden Planter small"
                category="gardening and planting"
                qty="1"
                price="500.00"
              />
              <ShoppingCartItems
                name="Wooden Planter small"
                category="gardening and planting"
                qty="5"
                price="2500.00"
              />
              <ShoppingCartItems
                name="Wooden Planter small"
                category="gardening and planting"
                qty="3"
                price="1500.00"
              />
              <ShoppingCartItems
                name="Wooden Planter small"
                category="gardening and planting"
                qty="1"
                price="500.00"
              />
              <ShoppingCartItems
                name="Wooden Planter small"
                category="gardening and planting"
                qty="5"
                price="2500.00"
              />
              <ShoppingCartItems
                name="Wooden Planter small"
                category="gardening and planting"
                qty="3"
                price="1500.00"
              />
              <ShoppingCartItems
                name="Wooden Planter small"
                category="gardening and planting"
                qty="1"
                price="500.00"
              />
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
                  <p>Rs 13000.00</p>
                  <br />
                  <p>Rs 250.00</p>
                </div>
              </div>
              <div className="shopping-cart-items-subtotal">
                <div className="shopping-cart-items-total-dis-question">
                  <p>Sub Total</p>
                </div>
                <div className="shopping-cart-items-total-dis-answer">
                  <p>Rs 13250.00</p>
                </div>
              </div>
              <div className="shopping-cart-proceed-btn-wrapper">
                <center>
                  <button className="shopping-cart-proceed-btn">Proceed</button>
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
      </div>
    </div>
  );
}

export default ShoppingCart;
