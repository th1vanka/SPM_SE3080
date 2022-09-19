import React from "react";
import "../../Css/Thivanka/order_page.css";
import NavBar from "../../Components/Thivanka/nav_bar";
import HomeHeader from "../../Components/Thivanka/home_header";
import Footter from "../../Components/Thivanka/footter";
import OrderSideNav from "../../Components/Thivanka/order_details_side_nav";
import OrderDetail from "../../Components/Thivanka/order_detail";

function ShippedPage() {
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
          {/* body start */}
          <div className="client-review-component-container">
            <OrderSideNav />
            <div className="client-side-menu-item-container">
              <div className="client-orders-filter-wrapper">
                <h3 style={{ marginLeft: "20px" }}>Shipped</h3>
                <br />
                <input type="date" className="order-filter-inputs" />
              </div>
              <div className="client-orders-wrapper">
                <OrderDetail delete={false} review={false} status="Shipped" />
                <OrderDetail delete={false} review={false} status="Shipped" />
                <OrderDetail delete={false} review={false} status="Shipped" />
                <OrderDetail delete={false} review={false} status="Shipped" />
                <OrderDetail delete={false} review={false} status="Shipped" />
                <OrderDetail delete={false} review={false} status="Shipped" />
              </div>
            </div>
          </div>

          {/* body end */}
        </div>
        <Footter />
      </div>
    </div>
  );
}

export default ShippedPage;
