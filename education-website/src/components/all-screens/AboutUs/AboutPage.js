import React from "react";
import Aidan from "../images/Headshot 2.png"
import Omar from "../images/Omar.JPG"
import "./about.css"


const AboutPage = () => {
    
    return(
        
        <div className="about">
             <h1>About Us</h1>
             <h3>Omar </h3>
             <img src={Omar}></img>   
             <p>Hi! My name is Omar Alkhulaidi and I'm currently a student at WeCanCodeit. I have always admire and believe in technology and dreamed to become a Software Developer. I began my journey as a Software Developer with intensive full-stack java, back-end and front-end bootcamp and now dreams of landing my first job in the industry. I live in Hilliard, Ohio and participate in soccer every Sunday and Thursday</p>
             <a id="Linkedin" href="http://linkedin.com/in/omar-alkhulaidi-76ab111aa">linkedin</a>
             <a id="Github" href="http://github.com/don90omar">Github</a>
            <h3>Aidan Eisele</h3>
             <img src={Aidan}></img>
             <p>I'm a former barber looking to make a jump into the IT field through a full stack Java bootcamp at We Can Code It. I hope to start my career in an enviornment that allows me to work with people and potentially move into a postion like recruiting or client/company relationships.</p>
             <a id="Linkedin" href="https://github.com/eiseleaidan">LinkedIn</a>
             <a id="Github" href="https://www.linkedin.com/in/aidan-eisele-5301a619b/">Github</a>
        </div>
        )
}


    
export default AboutPage