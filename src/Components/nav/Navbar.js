import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/icon-arrow-down.svg";
import moon from "../../assets/icon-moon.svg";
import "../nav/navbar.css";

function Navbar({ clicked, setClicked, setFont }) {
  // State for arrow click
  const [arrowClicked, setArrowClicked] = useState(false);

  // Toggle arrow click
  function handleArrow() {
    setArrowClicked((prevArrowClicked) => !prevArrowClicked);
  }

  // Toggle set click
  function handleSetClick() {
    setClicked((prevClicked) => !prevClicked);
  }

  return (
    <nav>
      {/* Main navigation */}
      <div className="main-nav">
        <div className="icon-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="fonts_bg-color">
          {/* Fonts and arrow */}
          <div className="font-style">
            <p>Sans Serif</p>
            <div onClick={handleArrow} className="arrow-container">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          {/* Line */}
          <div className="line"></div>
          {/* Color mode */}
          <div className="color-mode">
            <div style={clicked ? { background: "#A445ED" } : {}} className="background">
              <div
                onClick={handleSetClick}
                style={
                  clicked ? { transform: "translateX(10px)" } : { transform: "translateX(-10px)" }
                }
                className="circle"
              ></div>
            </div>
          </div>
          {/* Moon icon */}
          <div className="moon-icon">
            <img
              style={
                clicked
                  ? {
                      filter:
                        "invert(39%) sepia(49%) saturate(6974%) hue-rotate(258deg) brightness(97%) contrast(60%)",
                    }
                  : {}
              }
              src={moon}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Box container */}
      <div className="box-container">
        <div
          style={
            arrowClicked && clicked
              ? {
                  background: "#1F1F1F",
                  color: "#FFF",
                  transform: "translateY(70px)",
                  boxShadow: "0px 5px 30px 0px #A445ED",
                  opacity: 50,
                  height: "152px",
                }
              : arrowClicked
              ? {
                  color: "#2D2D2D",
                  background: "#FFF",
                  transform: "translateY(70px)",
                  opacity: 1,
                  height: "152px",
                  boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
                }
              : {}
          }
          className="box"
        >
          {/* Font options */}
          <p onClick={() => setFont("sans-serif")} style={{ fontFamily: "sans-serif" }}>
            Sans Serif
          </p>
          <p onClick={() => setFont("monospace")} style={{ fontFamily: "monospace" }}>
            Mono
          </p>
          <p onClick={() => setFont("serif")} style={{ fontFamily: "serif" }}>
            Serif
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
