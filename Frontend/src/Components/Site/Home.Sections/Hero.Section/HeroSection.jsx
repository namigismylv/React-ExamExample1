import React from "react";
import './HeroSection.css'
const HeroSection = () => {
  return (
    <section id="hero">
      <div className="hero__section">
        <div className="container">
          <div className="row heroRow">
            <div className="col-6">
              <div className="hero__section__img">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6">
              <div className="hero__section__title">
                <h1 className="discount__title">
                  <span>Flat</span> 75%Off
                </h1>
                <h1>IT’S HAPPENING THIS SEASON!</h1>
                <button>PURCHASE NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
