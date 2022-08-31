import React, { useState, useEffect } from "react";
import "../../Css/Thivanka/shopping_cart.css";
import NavBar from "../../Components/Thivanka/nav_bar";
import HomeHeader from "../../Components/Thivanka/home_header";
import ShoppingCartItems from "../../Components/Thivanka/shopping_cart_items";
import EditIcon from "@mui/icons-material/Edit";
import Visa from "../../Assets/visa.png";
import Master from "../../Assets/master.png";
import Paypal from "../../Assets/paypal.png";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import Footter from "../../Components/Thivanka/footter";

const details = [
  {
    name: "Wooden Planter small",
  },
  {
    name: "pot",
  },
  {
    name: "sand",
  },
];  
function ShoppingCart() {
  const [name, setName] = useState();

  const [data, setData] = useState([])
  
  // useEffect(() => {
  //   setData(...data,name)
  // },[])
  
  const checkHandler = (e) => {
    const names=e.target.name
    let tempData = details.map((detail) =>
      detail.name === names ? { ...detail, checked: names } : detail
    );
    setName(tempData)
  };

  const proceedHandler = () => {
    console.log(name);
  }

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
                <button className="cart-clean-btn">
                  {" "}
                  Clean <CleaningServicesIcon fontSize="small" />
                </button>
              </div>

              {details.map((detail) => (
                <ShoppingCartItems
                  name={detail.name}
                  category="gardening and planting"
                  qty="4"
                  price="200.00"
                  checkHandler={checkHandler}
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
