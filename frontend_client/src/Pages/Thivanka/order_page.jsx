import React,{useEffect,useState} from "react";
import "../../Css/Thivanka/order_page.css";
import NavBar from "../../Components/Thivanka/nav_bar";
import HomeHeader from "../../Components/Thivanka/home_header";
import OrderSideNav from "../../Components/Thivanka/order_details_side_nav";
import OrderDetail from "../../Components/Thivanka/order_detail";
import Footter from "../../Components/Thivanka/footter";
import axios from "axios";

function Order() {
  const [details,setDetails]=useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:8000/client/all/order/632a00b9829d7cae30825456`)
      .then((res) => {
        if (res.data.status === false) {
          alert(res.data.message);
        } else {
          setDetails(res.data.order);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  },[])

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
                <h3 style={{ marginLeft: "20px" }}>Orders</h3>
                <br />
                <input type="date" className="order-filter-inputs" />
              </div>
              <div className="client-orders-wrapper">
                {details.map((detail, index) => (
                  <OrderDetail
                    delete={false}
                    review={false}
                    status={detail.state}
                    pname={detail.product.productName}
                    qty={detail.product.productQty}
                    price={detail.product.productPrice}
                    date={detail.orderDate}
                    id={detail.oId}
                  />
                ))}
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

export default Order;
