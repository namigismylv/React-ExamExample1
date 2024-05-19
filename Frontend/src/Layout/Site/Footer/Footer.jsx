import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__top">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className="footer__top__widget">
                  <h6>About Us</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="col-3">
                <div className="footer__top__widget">
                  <h6>Newsletter</h6>
                  <p>Stay update with our latest</p>
                  <div className="footer__top__widget--input">
                    <input type="text" placeholder="Enter Email" />
                    <button>
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="footer__top__widget">
                  <h6>
                  Instragram Feed
                  </h6>
                  <ul className="footer__top__ul1">
                    <li><img src="https://preview.colorlib.com/theme/shop/img/i1.jpg.webp" alt="" /></li>
                    <li><img src="https://preview.colorlib.com/theme/shop/img/i2.jpg.webp" alt="" /></li>
                    <li><img src="https://preview.colorlib.com/theme/shop/img/i3.jpg.webp" alt="" /></li>
                    <li><img src="https://preview.colorlib.com/theme/shop/img/i4.jpg.webp" alt="" /></li>
                  </ul>
                  <ul className="footer__top__ul2">
                    <li><img src="https://preview.colorlib.com/theme/shop/img/i5.jpg.webp" alt="" /></li>
                    <li><img src="https://preview.colorlib.com/theme/shop/img/i6.jpg.webp" alt="" /></li>
                    <li><img src="https://preview.colorlib.com/theme/shop/img/i7.jpg.webp" alt="" /></li>
                    <li><img src="https://preview.colorlib.com/theme/shop/img/i8.jpg.webp" alt="" /></li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <div className="footer__top__widget">
                  <h6>Follow Us</h6>
                  <p>Let us be social</p>
                  <div className="footer__top__widget__socials">
                    <Link><i class="fa-brands fa-facebook-f"></i></Link>
                    <Link><i class="fa-brands fa-twitter"></i></Link>
                    <Link><i class="fa-brands fa-dribbble"></i></Link>
                    <Link><i class="fa-brands fa-behance"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>Copyright ©2024 All rights reserved | This template is made with <i class="fa-regular fa-heart"></i> by <span>Colorlib</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
