import React from "react";
import "./Menu.css";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`menu ${menuOpen ? "show" : ""}`}>
      <p onClick={() => setMenuOpen(!menuOpen)}>x</p>
      <h4>Home</h4>
      <h4>Find Recipes</h4>
      <h4>Favorite Recipes</h4>
      <h4>Account Settings</h4>
    </div>
  );
};

export default Menu;
