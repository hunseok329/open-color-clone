import React from "react";
import "./nav.css";

function colorNav() {
  return (
    <div className="navigation">
      <div className="container">
        <a className="blog-logo">OC-</a>
        <div className="navbar">
          <ul className="nav-menus-wrap">
            <li className="nav-menus-group">
              <a className="menus-title active">Swatches</a>
            </li>
            <li className="nav-menus-group">
              <a className="menus-title active">Ingredients</a>
            </li>
            <li className="nav-menus-group">
              <a className="menus-title active">Instructions</a>
            </li>
            <li className="nav-menus-group">
              <a className="menus-title active">Downloads</a>
            </li>
            <li className="nav-menus-group">
              <a className="menus-title active">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default colorNav;
