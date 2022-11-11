import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css"

const Header = () => (
    <div className="header">
        <h1>JAC Enterprises</h1>
         <ul className="navLink">
            <NavLink to = '/'>Home</NavLink>
            <NavLink to = '/contact'>Contact</NavLink>
            <NavLink to = '/us'>About Us</NavLink>
         </ul>
    </div>
)

export default Header