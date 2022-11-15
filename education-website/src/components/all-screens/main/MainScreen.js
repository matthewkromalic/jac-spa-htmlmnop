import React from "react";
import { Link } from "react-router-dom";
import NasaPage from "../NasaAPI";
import "./main.css"
import Logo from "../images/logo.png"
import GIF from "../images/giphy.gif"
import Question from "../images/question.gif"


const MainScreen = () => (
    
    <div className="mainScreen">
        <h1>Welcome to JAC'S Mystery Educator</h1>

        <Link to="/countries">
         <img src={Question} width="100"/>
         </Link>   
         <p>Lets learn something new!</p>
    </div>
)

export default MainScreen


