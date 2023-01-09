import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarmain">
        <a href="https://github.com/RashadXalil">
          <div className="nav-logo">
            <img
              width={60}
              height={60}
              style={{ borderRadius: "50%" }}
              src="https://avatars.githubusercontent.com/u/87971060?v=4"
              alt="ss"
            />
            <h1>Rashad teacher best</h1>
          </div>
        </a>
        <div className="nav-button">
          <Link to="/">
            <button>Homepage</button>
          </Link>
          <Link to="/form">
            <button>add button</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
