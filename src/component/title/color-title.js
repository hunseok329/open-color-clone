import React from "react";
import "./color-title.css";

function colorTitle() {
  return (
    <div className="container">
      <section className="cover">
        <div className="cover-content">
          <h1>
            Open color is an
            <br />
            open-source color scheme
            <div className="sub">
              Optimized for UI like font, background, border, etc.
            </div>
          </h1>
          <div className="metadata">
            <div className="version">Version 1.6.3</div>
            <div className="license">MIT license</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default colorTitle;
