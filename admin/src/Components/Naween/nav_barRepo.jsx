import React from "react";
import "../../css/Thivanka/nav_bar.css";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { NavLink } from "react-router-dom";
import ReportIcon from "@mui/icons-material/Report";
import TaskIcon from "@mui/icons-material/Task";

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
        <NavLink to="/dashboard" className="link_styles">
          <div className="nav_link_wrapper">
            <DashboardIcon fontSize="small" style={{ marginLeft: "45px" }} />
            <p className="nav_link clearfix">Dashboard</p>
          </div>
        </NavLink>
      </div>
      {/* Dashboard end */}
      {/* orders start */}
      <div className="nav_body ">
        <div className="nav_link_section ">
          <BookmarkAddedIcon fontSize="small" />{" "}
          <p className="nav_section_text">Client's Orders</p>
        </div>
        <NavLink to="/recent/order" className="link_styles">
          <div className="nav_link_wrapper">
            <AutorenewIcon fontSize="small" style={{ marginLeft: "45px" }} />
            <p className="nav_link clearfix">Recent</p>
          </div>
        </NavLink>
        <NavLink to="/to-be-shipped/order" className="link_styles">
          <div className="nav_link_wrapper">
            <DepartureBoardIcon
              fontSize="small"
              style={{ marginLeft: "45px" }}
            />
            <p className="nav_link clearfix">To Be Shipped</p>
          </div>
        </NavLink>
        <NavLink to="/shipped/order" className="link_styles">
          <div className="nav_link_wrapper">
            <LocalShippingIcon
              fontSize="small"
              style={{ marginLeft: "45px" }}
            />
            <p className="nav_link clearfix">Shipped</p>
          </div>
        </NavLink>
        <NavLink to="/complete/order" className="link_styles">
          <div className="nav_link_wrapper">
            <TaskIcon fontSize="small" style={{ marginLeft: "45px" }} />
            <p className="nav_link clearfix">Completed</p>
          </div>
        </NavLink>
      </div>
      {/* orders end */}

      {/* seller details start */}

      <div className="nav_body ">
        <div className="nav_link_section ">
          <BookmarkAddedIcon fontSize="small" />{" "}
          <p className="nav_section_text">Seller</p>
        </div>

        <NavLink to="/SellerDetalils" className="link_styles">
          <div className="nav_link_wrapper">
            <DepartureBoardIcon
              fontSize="small"
              style={{ marginLeft: "45px" }}
            />
            <p className="nav_link clearfix">Sellers Details</p>
          </div>
        </NavLink>
        <NavLink to="/complaints" className="link_styles">
          <div className="nav_link_wrapper">
            <LocalShippingIcon
              fontSize="small"
              style={{ marginLeft: "45px" }}
            />
            <p className="nav_link clearfix">Complaints</p>
          </div>
        </NavLink>
        <NavLink to="/SellerReply" className="link_styles">
          <div className="nav_link_wrapper">
            <LocalShippingIcon
              fontSize="small"
              style={{ marginLeft: "45px" }}
            />
            <p className="nav_link clearfix">Seller Reply</p>
          </div>
        </NavLink>
       {/* <NavLink to="/SellerReport" className="link_styles">
          <div className="nav_link_wrapper">
            <LocalShippingIcon
              fontSize="small"
              style={{ marginLeft: "45px" }}
            />
            <p className="nav_link clearfix">Seller Report</p>
          </div>
  </NavLink> */}
      </div>
      
   {/* seller details end */}

      {/* reports start */}
      <div className="nav_body ">
        <div className="nav_link_section ">
          <ReportIcon fontSize="small" />{" "}
          <p className="nav_section_text">Reports</p>
        </div>
        <NavLink to="/order/report" className="link_styles">
          <div className="nav_link_wrapper">
            <AutorenewIcon fontSize="small" style={{ marginLeft: "45px" }} />
            <p className="nav_link clearfix">Order Report</p>
          </div>
        </NavLink>
        <NavLink to="/SellerReport" className="link_styles">
          <div className="nav_link_wrapper">
            <AutorenewIcon fontSize="small" style={{ marginLeft: "45px" }} />
            <p className="nav_link clearfix">Sellers Report</p>
          </div>
        </NavLink>
      </div>

      {/* reports end */}
    </div>
  );
}

export default NavBar;
