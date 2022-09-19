import React from "react";
import "../../Css/Janani/user_profile_home.css";
import NavBar from "../../Components/Thivanka/nav_bar";
import HomeHeader from "../../Components/Thivanka/home_header";
import Footter from "../../Components/Thivanka/footter";
import "../../Css/Janani/user_profile_nav.css";

function UserProfileNav() {
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
          <div className="profile-nav-home-container">
            <div className="profile-nav-home-container-left-wrapper">
              <h4>Hi,Janani Hansika</h4>
              <h5 style={{ marginTop: "8px", color: "#CC8B86" }}>My Account</h5>
              <div className="profile-nav-home-nav-bar">
                <p style={{ marginBottom: "30px" }}>My Profile</p>
                <p style={{ marginBottom: "30px" }}>Address Book</p>
                <p style={{ marginBottom: "30px" }}>Payment</p>
                <p style={{ marginBottom: "30px" }}>Orders</p>
                <p style={{ marginBottom: "30px" }}>Reviews</p>
              </div>
            </div>
            <div className="profile-nav-home-container-right-wrapper">
              <br />
              <h4>Manage My Account</h4>
              <div className="item-box-wrapper">
                <div className="item-box">s</div>
                <div className="item-box">a</div>
                <div className="item-box">e</div>
              </div>
              <div className="item-box-wrapper2">
                <div className="item-box2">s</div>
                <div className="item-box2">a</div>
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

export default UserProfileNav;
