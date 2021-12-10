import React from "react";
import snappyIcon from "../images/icon-snappy-process.svg";
import affordableIcon from "../images/icon-affordable-prices.svg";
import peopleFirstIcon from "../images/icon-people-first.svg";

const Features = () => {
  return (
    <>
      <section className="features">
        <h1 className="feature-heading"> We’re different</h1>
        <div className="feature-items">
          <div className="feature-item">
            <img className="fi-icon" src={snappyIcon} alt="Snappy process." />
            <h3 className="fi-title">Snappy Process</h3>
            <p className="fi-info">
              Our application process can be completed in minutes, not hours.
              Don’t get stuck filling in tedious forms.
            </p>
          </div>
          <div className="feature-item">
            <img
              className="fi-icon"
              src={affordableIcon}
              alt="Affordable prices."
            />
            <h3 className="fi-title">Affordable Prices</h3>
            <p className="fi-info">
              We don’t want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </div>
          <div className="feature-item">
            <img
              className="fi-icon"
              src={peopleFirstIcon}
              alt="People First approach."
            />
            <h3 className="fi-title">People First</h3>
            <p className="fi-info">
              Our plans aren’t full of conditions and clauses to prevent
              payouts. We make sure you’re covered when you need it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
