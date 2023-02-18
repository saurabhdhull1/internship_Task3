import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
          <li>
          <button className="Menunavbtn">Buy now</button>
          </li>
        </ul>
        <button className="Navbtn">Buy now</button>
        <h1 className="logo">Landie</h1>
        
      </div>
    </nav>
  );
};

export default Navbar;
