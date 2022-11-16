import React, { useDebugValue, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css"
import menuBTN from "../all-screens/images/menu.png"

const Header = () => {
const [showCountries, setShowCountries] = useState(false) 
const menuButton = document.querySelector("#menuBTN")
const handleClick = () => {
    setShowCountries(prevState => !prevState) 
}
useEffect(() => {
}, [showCountries])

     return(<div className="header">
        <h1>JAC Enterprises</h1>
         <ul className="navLink">
            <NavLink to = '/'>Home</NavLink>
            <NavLink to = '/contact'>Contact</NavLink>
            <NavLink to = '/us'>About Us</NavLink>

            <input id = "menuBTN" type="image" src={menuBTN} onClick={() => handleClick()}/>
         {showCountries && <div>
         <NavLink id="stateBTN" to ="/states">States</NavLink> 
         <NavLink id="countryBTN" to = '/country'>Countries</NavLink> 
         <NavLink id="stateBTN" to ="/nasa">NASA</NavLink></div>}

         </ul>
    </div>)

}


export default Header