import React from "react";
import "../Css/shopping_cart.css";
import NavBar from "../Components/nav_bar";
import HomeHeader from "../Components/home_header";
import ShoppingCartItems from "../Components/shopping_cart_items";

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
        <div className="site-filter-wrapper clearfix">
          <center>
            <input
              type="search"
              placeholder="Search by name..."
              className="site-filter-inputs first"
            />
            <input
              type="search"
              placeholder="Search by category..."
              className="site-filter-inputs"
            />
          </center>
        </div>
        <div className="site-details-wrapper clearfix">
          <div className="shopping-cart-container">
            <div className="shopping-cart-items-wrapper">
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
                <div style={{fontWeight:"bold",fontSize:"18px"}}>Summary</div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
