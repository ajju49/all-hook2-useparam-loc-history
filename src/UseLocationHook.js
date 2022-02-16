// @@@@@@@@@@@@@@@ #60. useLocation Hooks in React Router @@@@@@
// current path pata karne ke liye useLocation hook use hota hain
import React from "react";
import { NavLink } from "react-router-dom";

const UseLocationHook = () => {
  return (
    <div className="menu_style">
      <NavLink exact activeClassName="active_class" to="/">
        AboutUs
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/service">
        Services
      </NavLink>
      <NavLink
        activeClassName="active_class"
        to="/locationuser/ajnk/shinde"
      >
        LocationUser
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/contact">
        Contact US
      </NavLink>
    </div>
  );
};

export default UseLocationHook;

//Note: LocationUser.jsx is from 56.Router folder