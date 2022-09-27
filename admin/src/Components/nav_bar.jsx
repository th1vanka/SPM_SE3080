import React from "react";
import "../css/nav_bar.css";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

function NavBar() {
  return (
    <div className="nav_main_container ">
      <div className="nav_header">
        <p className="nav_heading_text">Heading</p>
      </div>
      {/* Dashboard start */}
      <div className="nav_body ">
        <div className="nav_link_section ">
          <DashboardIcon fontSize="small" />{" "}
          <p className="nav_section_text">Overview</p>
        </div>
        <div className="nav_link_wrapper">
          <DashboardIcon fontSize="small" style={{ marginLeft: "45px" }} />
          <p className="nav_link clearfix">Dashboard</p>
        </div>
      </div>
      {/* Dashboard end */}
      {/* orders start */}
      <div className="nav_body ">
        <div className="nav_link_section ">
          <BookmarkAddedIcon fontSize="small" />{" "}
          <p className="nav_section_text">Client's Orders</p>
        </div>
        <div className="nav_link_wrapper">
          <AutorenewIcon fontSize="small" style={{ marginLeft: "45px" }} />
          <p className="nav_link clearfix">Recent</p>
        </div>
        <div className="nav_link_wrapper">
          <DepartureBoardIcon fontSize="small" style={{ marginLeft: "45px" }} />
          <p className="nav_link clearfix">To Be Shipped</p>
        </div>
        <div className="nav_link_wrapper">
          <LocalShippingIcon fontSize="small" style={{ marginLeft: "45px" }} />
          <p className="nav_link clearfix">Shipped</p>
        </div>
      </div>
      {/* orders end */}
    </div>
  );
}

export default NavBar;
