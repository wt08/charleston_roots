import React, { useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";

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
