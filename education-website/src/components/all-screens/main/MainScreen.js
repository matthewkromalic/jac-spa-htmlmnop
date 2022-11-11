import React from "react";
import Fish from "../Fish/FishAPI";
import './main.css'
import { NavLink } from "react-router-dom";

const MainScreen = () => (
    <div>
        <div className="header">
            <h1>Temp header</h1>
            <ul className="links">
                <NavLink to='/species'>Learn about Fish</NavLink>
            </ul>
        </div>

        <div>
            <h2>Main Screen</h2> 
        </div>
       
    </div>
)

export default MainScreen;