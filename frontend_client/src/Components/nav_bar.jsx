import React from 'react'
import "../Css/nav_bar.css"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className="site-nav-container">
      {/* <div className="site-nav-logo-wrapper"></div> */}
      <div className="site-nav-logo-wrapper"></div>
      <div className="site-nav-links-wrapper">
        <Link to="/" className="site-nav-link">
          <div className="site-nav-links">HOME</div>
        </Link>
        <Link to="/item" className="site-nav-link">
          <div className="site-nav-links">PRODUCTS</div>
        </Link>
         
      </div>
      <div className="site-nav-logo-wrapper"></div>

      {/* <div className="site-nav-profile">
        <div className="site-nav-profile-icon">
          <Profile />
        </div>
      </div> */}
    </div>
  );
}

export default NavBar