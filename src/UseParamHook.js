// @@@@@@@@@@@@@@@ #59. useParams Hooks in React Router @@@@@@
import React from "react";
import { NavLink } from "react-router-dom";

const UseParamsHook = () => {
  return (
    <div className="menu_style">
      <NavLink exact activeClassName="active_class" to="/">
        AboutUs
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/service">
        Services
      </NavLink>
      <NavLink activeClassName="active_class" to="/user">
        User
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/contact">
        Contact US
      </NavLink>
    </div>
  );
};

export default UseParamsHook;

//Note: user.jsx is imporeted from 56.Router folder