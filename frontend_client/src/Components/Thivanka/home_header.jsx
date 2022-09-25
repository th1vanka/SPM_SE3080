import React,{useState,useEffect} from "react";
import "../../Css/Thivanka/home_header.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AssignmentTurnedIn from "@mui/icons-material/AssignmentTurnedInOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShippingOutlined"; 
import { useNavigate } from "react-router";
import Flag from "react-world-flags";
import axios from "axios";

function HomeHeader() {
  const navigate = useNavigate();
    const [details, setDetails] = useState([]);

  const cartHandler = () => {
    navigate("/cart");
  };
    const reviewedHandler = () => {
      navigate("/review");
  };
  const orderdHandler = () => {
    navigate("/order");
  }
    const shippedHandler = () => {
      navigate("/shipped");
  };

  const profleHandler = () => {
    navigate("/profile");
  }
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/client/cart/item/test@gmail.com")
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  
  return (
    <div className="site-body-header">
      <div className="site-body-header-details-wrapper">
        <div
          style={{
            display: "flex",
            borderRight: "2px solid black",
            cursor: "pointer",
          }}
          onClick={orderdHandler}
        >
          <ShoppingCartOutlinedIcon
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
        <div
          style={{
            display: "flex",
            borderRight: "1px solid black",
            cursor: "pointer",
          }}
          onClick={shippedHandler}
        >
          <LocalShippingIcon
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
            Shipped
          </div>
        </div>
        <div
          style={{
            display: "flex",
            borderRight: "1px solid black",
            cursor: "pointer",
          }}
          onClick={reviewedHandler}
        >
          <AssignmentTurnedIn
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
            To be Reviewed
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
              code={"IN"}
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
          <NotificationsNoneOutlinedIcon
            style={{ color: "black" }}
            titleAccess="Notifications"
            // fontSize="small"
          />
        </Badge>
        <Badge
          badgeContent={details.length}
          style={{ color: "white" }}
          className="site-body-header-icon"
          color="error"
          onClick={cartHandler}
        >
          <ShoppingCartOutlinedIcon
            style={{ color: "black", marginRight: "3px" }}
            titleAccess="Shopping Cart"
            // fontSize="small"
          />
        </Badge>

        <Badge className="site-body-header-icon">
          <PermIdentityOutlinedIcon
            style={{ color: "black" }}
            titleAccess="My Profile"
            // fontSize="mediam"
            onClick={profleHandler}
          />
        </Badge>
      </div>
    </div>
  );
}

export default HomeHeader;
