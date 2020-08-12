import React, { useState } from "react";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav">
      <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default Nav;
