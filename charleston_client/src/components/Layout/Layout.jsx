import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import './Layout.css'
import { Link } from "react-router-dom";

const Layout = (props) => {
  console.log(props.user)


  return (
    <div>
      <Nav />
  {props.user ? <button className="account">{props.user.username}</button> : <Link to={'/login'}><button className='login'>Login</button></Link>}
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
