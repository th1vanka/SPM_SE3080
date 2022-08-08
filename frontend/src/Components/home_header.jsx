import React from 'react'
import "../Css/home_header.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";
import { useNavigate } from 'react-router';

function HomeHeader() {
  const navigate = useNavigate();
  
  const cartHandler = () => {
    navigate("/cart")
  }
    return (
      <div className="site-body-header">
        <div className="site-body-header-icon-wrapper">
          <Badge
            badgeContent={4}
            style={{ color: "white" }}
            className="site-body-header-icon"
          >
            <ShoppingCartIcon
              style={{ color: "white", marginRight: "3px" }}
              titleAccess="Shopping Cart"
              onClick={cartHandler}
            />
          </Badge>

          <Badge
            badgeContent={3}
            style={{ color: "white" }}
            className="site-body-header-icon"
          >
            <NotificationsIcon
              style={{ color: "white" }}
              titleAccess="Notifications"
            />
          </Badge>

          <Badge className="site-body-header-icon">
            <PersonIcon style={{ color: "white" }} titleAccess="My Profile" />
          </Badge>
        </div>
      </div>
    );
}

export default HomeHeader