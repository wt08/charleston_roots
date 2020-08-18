import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Layout.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Layout = (props) => {
  return (
    <div>
      <Nav />
      {props.user ? (
        <Link to={"/accountsettings"}>
          <Button variant="light" className="account">{props.user.username}</Button>
        </Link>
      ) : (
        <Link to={"/login"}>
          <Button variant="light" className="login">Login</Button>
        </Link>
      )}
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
