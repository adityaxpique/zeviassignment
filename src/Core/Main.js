import React from "react";
import "./Main.css";

const Main = () => {
  const texts = [
    "He's not the sharpest knife in the drawer.",
    "The big building was blazing with lights.",
    "The big building was blazing with lights.",
    "Get your act together.",
  ];

  return (
    <div className="main-god">
      {texts.map((text, index) => {
        return (
          <div className="cards">
            <div className="card">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const ft = document.querySelectorAll(".ft-text");
                  ft[index].classList.toggle("boldtext");
                }}
                className="bold-btn btnn"
              >
                BOLD
              </button>
              <button
                className="italic-btn btnn"
                onClick={(e) => {
                  e.preventDefault();
                  const ft = document.querySelectorAll(".ft-text");
                  ft[index].classList.toggle("italictext");
                }}
              >
                ITALIC
              </button>
              <button
                className="underline-btn btnn"
                onClick={(e) => {
                  e.preventDefault();
                  const ft = document.querySelectorAll(".ft-text");
                  ft[index].classList.toggle("underlinetext");
                }}
              >
                UNDERLINE
              </button>
              <button
                className="fs-btn btnn"
                onClick={(e) => {
                  e.preventDefault();
                  const ft = document.querySelectorAll(".ft-text");
                  ft[index].classList.toggle("fstext");
                }}
              >
                FONT SIZE
              </button>
              <button
                className="color-btn btnn"
                onClick={(e) => {
                  e.preventDefault();
                  const ft = document.querySelectorAll(".ft-text");
                  ft[index].classList.toggle("colortext");
                }}
              >
                COLOR
              </button>
            </div>
            <div className="card">
              <p className="ft-text">{text}</p>
            </div>
          </div>
        );
      })}
      {/* <div className="cards">
        <div className="card">
          <button className="bold-btn btnn">BOLD</button>
          <button className="italic-btn btnn">ITALIC</button>
          <button className="underline-btn btnn">UNDERLINE</button>
          <button className="fs-btn btnn">FONT SIZE</button>
          <button className="color-btn btnn">COLOR</button>
        </div>
        <div className="card">
          <p>The big building was blazing with lights.</p>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <button className="bold-btn btnn">BOLD</button>
          <button className="italic-btn btnn">ITALIC</button>
          <button className="underline-btn btnn">UNDERLINE</button>
          <button className="fs-btn btnn">FONT SIZE</button>
          <button className="color-btn btnn">COLOR</button>
        </div>
        <div className="card">
          <p>Now you must answer some big questions.</p>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <button className="bold-btn btnn">BOLD</button>
          <button className="italic-btn btnn">ITALIC</button>
          <button className="underline-btn btnn">UNDERLINE</button>
          <button className="fs-btn btnn">FONT SIZE</button>
          <button className="color-btn btnn">COLOR</button>
        </div>
        <div className="card">
          <p>Get your act together.</p>
        </div>
      </div> */}
    </div>
  );
};

export default Main;
