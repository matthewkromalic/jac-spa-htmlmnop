import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    <div className="header">

        <h1>Welcome to Jac Enterprises!</h1>

         <ul className="navigation">
            <NavLink to = '/'>Home</NavLink>
          </ul>
    </div>
}

export default Header