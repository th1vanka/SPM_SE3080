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
              marginTop: "3px",
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
              marginTop: "3px",
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
              marginTop: "3px",
            }}
          >
            Orders
          </div>
        </div>
        <div style={{ display: "flex", cursor: "pointer" }}>
          <div
            style={{
              paddingRight: "10px",
              marginTop: "3px",
            }}
          >
            <Flag
              code={"AO"}
              fallback={<span>Unknown Country</span>}
              height="14"
            />
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
            style={{ color: "white" }}
            titleAccess="Notifications"
            fontSize="small"
          />
        </Badge>
        <Badge
          badgeContent={4}
          style={{ color: "white" }}
          className="site-body-header-icon"
          color="error"
        >
          <ShoppingBasketIcon
            style={{ color: "white", marginRight: "3px" }}
            titleAccess="Shopping Cart"
            onClick={cartHandler}
            fontSize="small"
          />
        </Badge>
        <Badge className="site-body-header-icon">
          <PersonIcon
            style={{ color: "white" }}
            titleAccess="My Profile"
            fontSize="small"
          />
        </Badge>
      </div>
    </div>
  );
}

export default HomeHeader;
