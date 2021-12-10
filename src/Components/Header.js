import React, { useState } from "react";
import logo from "../images/logo.svg";
import hamIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";

const Header = () => {
  const [hamOpen, setHamOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    return setWindowWidth(window.innerWidth);
  });
  return (
    <>
      <header>
        <img className="header-logo" src={logo} alt="Home." />
        <ul
          className={`${
            hamOpen && windowWidth <= 850 ? "ham-menu" : "navbar-nav"
          }`}
        >
          <li className="nav-item">How we work</li>
          <li className="nav-item">Blog</li>
          <li className="nav-item">Account</li>
          <li className="nav-item">
            <button className="nav-btn">View plans</button>
          </li>
        </ul>
        <img
          className="ham-icon"
          src={hamOpen ? closeIcon : hamIcon}
          onClick={() => setHamOpen(!hamOpen)}
          alt="Open hamburger menu."
        />
      </header>
    </>
  );
};

export default Header;
