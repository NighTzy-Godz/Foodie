import { Link, NavLink } from "react-router-dom";

import "../../static/css/navbar.css";

import React, { useState } from "react";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleContent = () => {
    setClick(!click);
  };

  return (
    <React.Fragment>
      <nav className="mainNav">
        <div className="container">
          <div className="navContainer">
            <div className="logo">
              <Link to="/">Foodie</Link>
            </div>
            <div className={`hide_content ${click ? "show" : ""}`}>
              <ul>
                <li className="">
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/menu"
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    Menu
                  </NavLink>
                </li>

                <li className="">
                  <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    About
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="navUtils">
                <div className="search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="cart">
                  <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                </div>
                <div className="">
                  <Link to="/" className="navBtn">
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>Sign
                    In
                  </Link>
                </div>
              </div>
            </div>

            <i className="fa-solid fa-bars hideBtn" onClick={handleContent}></i>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
