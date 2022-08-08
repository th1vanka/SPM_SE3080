import React from 'react'
import "../Css/nav_bar.css"
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div className="site-nav-container">
      {/* <div className="site-nav-logo-wrapper"></div> */}
      <div className="site-nav-links-wrapper">
        <NavLink to="/" className="site-nav-link">
          <div className="site-nav-links">HOME</div>
        </NavLink>
        <NavLink to="/item" className="site-nav-link">
          <div className="site-nav-links">ITEM</div>
        </NavLink>
        <NavLink to="#" className="site-nav-link">
          <div className="site-nav-links">PAYMENT</div>
        </NavLink>
        <NavLink to="#" className="site-nav-link">
          <div className="site-nav-links">CONTACT</div>
        </NavLink>
        <NavLink to="#" className="site-nav-link">
          <div className="site-nav-links">ABOUT US</div>
        </NavLink>
      </div>
      {/* <div className="site-nav-profile">
        <div className="site-nav-profile-icon">
          <Profile />
        </div>
      </div> */}
    </div>
  );
}

export default NavBar