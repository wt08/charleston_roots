import React from "react";
import "./Burger.css";

const Burger = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      onClick={() => setMenuOpen(!menuOpen)}
      className={`burger ${menuOpen ? "hide" : ""}`}
    >
      <div className="burger_line" />
      <div className="burger_line" />
      <div className="burger_line" />
    </div>
  );
};

export default Burger;
