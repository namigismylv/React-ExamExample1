import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './Header.css'
import MainContext from "../../../Context/Context";

const Header = () => {
  const {basketItems,input,setInput}=useContext(MainContext)
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
            <li className="header__basket">
                <Link to="/basket" className="header__basket__link"> <i class="fa-solid fa-cart-shopping"></i> <span className="basketSup">{basketItems.length}</span></Link>
            </li>
            <li>
              <input className="header__search" type="text" placeholder="search" value={input} onChange={(e)=>setInput(e.target.value)} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
