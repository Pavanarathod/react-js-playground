import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div>
        <h1>PROSHOP</h1>
      </div>

      <div>
        <ul>
          <li>
            <a href="/">Username</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">SignIN</a>
          </li>
          <li>
            <a href="/">Logout</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
