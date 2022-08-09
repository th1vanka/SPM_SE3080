import React from "react";
import "../Css/home_header.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { useNavigate } from "react-router";
import Flag from "react-world-flags";

function HomeHeader() {
  const navigate = useNavigate();

  const cartHandler = () => {
    navigate("/cart");
  };
  
  return (
    <div className="site-body-header">
      <div className="site-body-header-details-wrapper">
        <div
          style={{
            display: "flex",
            borderRight: "2px solid white",
            cursor: "pointer",
          }}
        >
          <FavoriteBorderIcon
            fontSize="small"
            style={{ marginTop: "2px", marginRight: "4px" }}
          />
          <div
            style={{
              paddingRight: "10px",
              fontSize: "13px",
              marginTop: "5px",
            }}
          >
            Wish List
          </div>
        </div>
        <div
          style={{
            display: "flex",
            borderRight: "1px solid white",
            cursor: "pointer",
          }}
        >
          <PaidOutlinedIcon
            fontSize="small"
            style={{ marginTop: "2px", marginRight: "4px" }}
          />
          <div
            style={{
              paddingRight: "10px",
              fontSize: "13px",
              marginTop: "5px",
            }}
          >
            Payments
          </div>
        </div>
        <div
          style={{
            display: "flex",
            borderRight: "2px solid white",
            cursor: "pointer",
          }}
        >
          <ShoppingBasketOutlinedIcon
            fontSize="small"
            style={{ marginTop: "2px", marginRight: "4px" }}
          />
          <div
            style={{
              paddingRight: "10px",
              fontSize: "13px",
              marginTop: "5px",
            }}
          >
            Orders
          </div>
        </div>
        <div style={{ display: "flex", cursor: "pointer" }}>
          <div
            style={{
              paddingRight: "10px",
              marginTop: "2px",
            }}
          >
            <Flag
              code={"sl"}
              fallback={<span>Unknown Country</span>}
              height="14"
            />{" "}
            <span style={{ fontSize: "13px" }}>Sri Lanka</span>
          </div>
        </div>
      </div>
      <div className="site-body-header-icon-wrapper">
        <Badge
          badgeContent={3}
          style={{ color: "white" }}
          className="site-body-header-icon"
          color="error"
        >
          <NotificationsIcon
            style={{ color: "black" }}
            titleAccess="Notifications"
            // fontSize="small"
          />
        </Badge>
        <Badge
          badgeContent={4}
          style={{ color: "white" }}
          className="site-body-header-icon"
          color="error"
          onClick={cartHandler}
        >
          <ShoppingBasketIcon
            style={{ color: "black", marginRight: "3px" }}
            titleAccess="Shopping Cart"
            // fontSize="small"
          />
        </Badge>
        <Badge className="site-body-header-icon">
          <PersonIcon
            style={{ color: "black" }}
            titleAccess="My Profile"
            // fontSize="mediam"
          />
        </Badge>
      </div>
    </div>
  );
}

export default HomeHeader;
