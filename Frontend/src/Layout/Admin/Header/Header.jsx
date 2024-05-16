import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <div className="header__bottom">
        <div className="header__bottom__left">
          <Link to="/admin">
            <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" />
          </Link>
        </div>
        <div className="header__bottom__right">
          <ul>
            <li>
                <Link to="/admin">Dashboard</Link>
            </li>
            <li>
                <Link to="add">Add</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
