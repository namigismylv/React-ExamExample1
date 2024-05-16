import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../../Context/Context";

const Header = () => {
  const {basketItems}=useContext(MainContext)
  return (
    <header>
      <div className="header__top">
        <div className="header__top__left">
          <ul>
            <li>
              <a href="#">+12312-3-1209</a>
            </li>
            <li>
              <a href="#">support@colorlib.com</a>
            </li>
          </ul>
        </div>
        <div className="header__top__right">
          <a href="">login</a>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__bottom__left">
          <Link to="/">
            <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" />
          </Link>
        </div>
        <div className="header__bottom__right">
          <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/basket">Cart <span>{basketItems.length}</span></Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
