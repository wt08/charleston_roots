import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`menu ${menuOpen ? "show" : ""}`}>
      <p onClick={() => setMenuOpen(!menuOpen)}><FontAwesomeIcon icon={faTimes}/></p>
      <Link to={"/"}>
        <h4>Home</h4>
      </Link>
      <Link to={"/recipegenerator"}>
        <h4>Recipe Generator</h4>
      </Link>
      <Link to={"/favrecipes"}>
        <h4>Favorite Recipes</h4>
      </Link>
    </div>
  );
};

export default Menu;
