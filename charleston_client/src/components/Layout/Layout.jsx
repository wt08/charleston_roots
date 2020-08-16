import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Layout.css";
import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <div>
      <Nav />
      {props.user ? (
        <Link to={"/accountsettings"}>
          <button className="account">{props.user.username}</button>
        </Link>
      ) : (
        <Link to={"/login"}>
          <button className="login">Login</button>
        </Link>
      )}
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
