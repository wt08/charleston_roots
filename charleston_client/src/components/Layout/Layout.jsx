import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import './Layout.css'
import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <div>
      <Nav />
      <Link to={'/login'}><button className='login'>Login</button></Link>
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
