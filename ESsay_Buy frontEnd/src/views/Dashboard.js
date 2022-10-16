import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useNavigate } from 'react-router-dom';

import {
  Label,
  Input,
  FormGroup,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";


import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import UserProfile from "./UserProfile";
import { ReactSession } from "react-client-session";

import NavBar from "components/Navbars/NewNavBar";
import HomeHeader from "components/Headers/NewHeader";
import SelectCategory from "./Debo/SelectCategory";


function Dashboard() {
  const history = useHistory();

  document.documentElement.classList.remove("nav-open");

  const clickMyTours = () => {
    history.push({
      pathname: "/my-tours",
    });
  };
  const clickUserProfile = () => {
    history.push({
      pathname: "/user-profile",
    });
  };

  const clickViewItems = () => {
    history.push({
      pathname: "/items",
    });
  };

  const clickSelectCategory = () => {
    history.push({
      pathname: "/selectCat",
    });
  };

  const sellerSup =() => {
    history.push({
      pathname: "Seller-sup",
    });
  };

  useEffect(() => {
    ReactSession.setStoreType("localStorage");
    if (ReactSession.get("user") != null) {
      document.body.classList.add("index");
      document.getElementById("card1").classList.remove("card");
      document.getElementById("card2").classList.remove("card");
      document.getElementById("card3").classList.remove("card");
      document.getElementById("card4").classList.remove("card");
      document.getElementById("card5").classList.remove("card");

      return function cleanup() {
        document.body.classList.remove("index");
      };
    } else {
      history.push({
        pathname: "/login",
      });
    }
  }, []);

  return (
    <>
    <ProfilePageHeader></ProfilePageHeader>
      <IndexNavbar></IndexNavbar> 

      <div className="main">
        <div className="edit-booking-content">
          <h2 align="center">Seller Dashboard</h2>
          <hr></hr>
          <br></br>
          <div className="dashboard-content">
            <Row>
              <Col>
                <Card
                  className="dashboard-card"
                  id="card1"
                  onClick={clickViewItems}
                >
                  <img
                    src={require("assets/img/product.png").default}
                    className="dashboard-icon"
                  />
                  Product Details
                  <label className="dashboard-card-subtitle">
                    Manage & View all the items you Added
                  </label>
                </Card>
              </Col>
              <Col>
                <Card
                  className="dashboard-card"
                  id="card2"
                  onClick={clickMyTours}
                >
                  <img
                    src={require("assets/img/order.png").default}
                    className="dashboard-icon"
                  />
                  Order Details
                  <label className="dashboard-card-subtitle">
                    Manage & View all the orders received.
                  </label>
                </Card>
              </Col>
            </Row>
            <br></br>
            <br></br>
            <Row>
              <Col>
                <Card
                  className="dashboard-card"
                  id="card3"
                  onClick={sellerSup}
                >
                  <img
                    src={require("assets/img/question.png").default}
                    className="dashboard-icon"
                  />
                  Seller Support
                  <label className="dashboard-card-subtitle">
                    
                  </label>
                </Card>
              </Col>
              <Col>
                <Card
                  className="dashboard-card"
                  id="card4"
                  onClick={clickSelectCategory}
                >
                  <img
                    src={require("assets/img/calendar.png").default}
                    className="dashboard-icon"
                  />
                  Add Items
                  <label className="dashboard-card-subtitle">
                    
                  </label>
                </Card>
              </Col>
              <Col>
                <Card
                  className="dashboard-card"
                  id="card5"
                  onClick={clickUserProfile}
                >
                  <img
                    src={require("assets/img/userprofile.png").default}
                    className="dashboard-icon"
                  />
                  User Profile
                  <label className="dashboard-card-subtitle">
                    Manage your user profile.
                  </label>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default Dashboard;
