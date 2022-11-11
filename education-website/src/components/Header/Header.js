import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css"
import menuBTN from "../all-screens/images/menu.png"

const Header = () => {
const menuButton = document.querySelector("#menuBTN")
const countryButton = document.querySelector("#countryBTN")

if(menuButton){
    menuButton.addEventListener("click", () => {
        if(countryButton.style.display == "none"){
            countryButton.style.display = "grid"
        }else{
            countryButton.style.display = "none"
        }
    })  
}else{
    console.log("menu button is null")
}
    return(<div className="header">
        <h1>JAC Enterprises</h1>
         <ul className="navLink">
            <NavLink to = '/'>Home</NavLink>
            <NavLink to = '/contact'>Contact</NavLink>
            <NavLink to = '/us'>About Us</NavLink>
            <input id = "menuBTN" type="image" src={menuBTN}/>
            <NavLink id="countryBTN" to = '/countries'>Countries</NavLink>
         </ul>
    </div>)

}


export default Header