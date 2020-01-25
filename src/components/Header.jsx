import React, { useState } from "react";
import { Link } from "gatsby";
import { MDMenu } from "react-icons/md";

export const Header = () => {
  const [isMobile, toggle] = React.useState(false);

  function mobileView(mobile) {
    if (mobile.matches) {
      document.body.style.backgroundColor = "yellow";
    } else {
      document.body.style.backgroundColor = "pink";
    }
  }

  var mobile = window.matchMedia("(max-width: 700px)");
  mobileView(mobile);
  mobile.addListener(mobileView);

  return (
    <nav className="row">
      <div className="nav-logo">
        <Link to="/">
          LUZ ELECTRIC <br /> & CONTROL SYSTEMS INC
        </Link>
      </div>
      <div className="nav-items">
        <ul className="nav-link-list row">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
