
//history ke andar hi hame location milta hain but history
//  is mutable so always prefer useLocation hook for current path
import React from "react";
import { NavLink } from "react-router-dom";

const UseHistoryApp = () => {
  return (
    <div className="menu_style">
      <NavLink exact activeClassName="active_class" to="/">
        AboutUs
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/service">
        Services
      </NavLink>
      <NavLink activeClassName="active_class" to="/historyuser/ajnk/shinde">
        HistoryUser
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/contact">
        Contact US
      </NavLink>
    </div>
  );
};

export default UseHistoryApp;

//Note: historyUser.jsx is from 56.Router folder