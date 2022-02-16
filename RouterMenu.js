// @@@@@@@@@@@@@@@@@ #57. RouterMenu.jsx  @@@@@@@@@@@@@@@@
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const RouterMenu = () => {
  return (
    <>
      {/* with NavLink we can add active attribute with className  */}
      <NavLink
        exact
        activeClassName="active_class"
        to="/"
        style={{ textDecoration: "none" }}
      >
        AboutUs
      </NavLink>
      <NavLink
        exact
        activeClassName="active_class"
        to="/contact"
        style={{ textDecoration: "none" }}
      >
        Contact US
      </NavLink>
      <br />
      {/* we are unable to add active class with link tag */}
      {/* <Link to="/">About Us </Link>
      <Link to="/contact">Contact Us</Link> */}
      <br />
      <a href="/" style={{ textDecoration: "none" }}>
        AboutUs
      </a>
      <a href="/contact" style={{ textDecoration: "none" }}>
        ContactUs
      </a>
      {/* anchor tag reloads whole page i.e server side rendering  */}
    </>
  );
};

export default RouterMenu;

// Note:  this component is imported in 56.routerApp.jsx
//uncomment the code in About.jsx