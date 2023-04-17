import React from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const navbar = () => {
  return (
    <nav className="app__nav">
      <div className="app__navbar">
        <div className="app__navbar-logo">
          <h2>Harbour.Space</h2>
          <p> /Data Science</p>
        </div>

        <div className="app__navbar-login">
          <GiHamburgerMenu color="#fff" fontSize={27} />
        </div>
      </div>

      <div className="app__navbar-btn">Apply Now</div>
    </nav>
  );
};

export default navbar;
