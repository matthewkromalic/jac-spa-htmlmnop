import React from "react";
import Aidan from "../images/Headshot 2.png"
import "./about.css"
const AboutPage = () => {
    
    return(
        
        <div className="about">
             <h1>About Us</h1>
             <p>Hi! My name is Omar Alkhulaidi and I'm currently a student at WeCanCodeit. I have always admire and believe in technology and dreamed to become a Software Developer. I began my journey as a Software Developer with intensive full-stack java, back-end and front-end bootcamp and now dreams of landing my first job in the industry. I live in Hilliard, Ohio and participate in soccer every Sunday and Thursday</p>
            <h3>Aidan Eisele</h3>
             <img src={Aidan}></img>
             <p>I'm a former barber looking to make a jump into the IT field through a full stack Java bootcamp at We Can Code It. I hope to start my career in an enviornment that allows me to work with people and potentially move into a postion like recruiting or client/company relationships.</p>
        </div>
        )
}


    
export default AboutPage