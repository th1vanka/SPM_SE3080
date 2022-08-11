import React from 'react'
import NavBar from "../Components/nav_bar";
import HomeHeader from "../Components/home_header";
import OrderSideNav from "../Components/order_details_side_nav";
import OrderDetail from "../Components/order_detail";

function FeedbackPage() {
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
                <h3 style={{ marginLeft: "20px" }}>To Be Reviews</h3>
                <br />
                <input type="date" className="order-filter-inputs" />
              </div>
              <div className="client-orders-wrapper">
                <OrderDetail delete={false} review={true} />
                <OrderDetail delete={false} review={true} />
                <OrderDetail delete={false} review={true} />
                <OrderDetail delete={false} review={true} />
                <OrderDetail delete={false} review={true} />
                <OrderDetail delete={false} review={true} />
              </div>
            </div>
          </div>

          {/* body end */}
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage