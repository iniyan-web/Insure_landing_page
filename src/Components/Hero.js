import React from "react";
import Header from "./Header";
import heroImgDesktop from "../images/image-intro-desktop.jpg";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <Header />
        <div className="hero-content">
          <div className="main-info">
            <div className="mi-text">
              <h1 className="mi-title">Humanizing your insurance.</h1>
              <p className="mi-para">
                Get your life insurance coverage easier and faster. We blend our
                expertise and technology to help you find the plan that’s right
                for you. Ensure you and your loved ones are protected.
              </p>
              <button className="mi-btn">View plans</button>
            </div>
            <img
              className="mi-img"
              src={heroImgDesktop}
              alt="A happy family walking on sidewalk."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
