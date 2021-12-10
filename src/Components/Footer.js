import React from "react";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <img className="footer-logo" src={logo} alt="Home." />
          <div className="social-icons">
            <span className="social-icon icon-fb"></span>
            <span className="social-icon icon-twitter"></span>
            <span className="social-icon icon-pinterest"></span>
            <span className="social-icon icon-insta"></span>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="bottom-grp">
            <h3 className="bgrp-heading">Our company</h3>
            <ul className="bgrp-list">
              <li>How we work</li>
              <li>Why Insure?</li>
              <li>View plans</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div className="bottom-grp">
            <h3 className="bgrp-heading"> Help me</h3>
            <ul className="bgrp-list">
              <li>FAQ</li>
              <li>Terms of use</li>
              <li>Privacy policy</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div className="bottom-grp">
            <h3 className="bgrp-heading">Contact</h3>
            <ul className="bgrp-list">
              <li>Sales</li>
              <li>Support</li>
              <li>Live chat</li>
            </ul>
          </div>
          <div className="bottom-grp">
            <h3 className="bgrp-heading">Others</h3>
            <ul className="bgrp-list">
              <li>Careers</li>
              <li>Press</li>
              <li>Licenses</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
