import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import './Layout.css'

const Layout = (props) => {
  return (
    <div>
      <Nav />
      <button className='login'>Login</button>
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
