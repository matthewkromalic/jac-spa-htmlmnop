import React from "react";
import Aidan from "../images/Headshot 2.png"
import Omar from "../images/Omar.JPG"
import "./about.css"

import Prakash from "../images/Pk.JPEG"

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
             <h3>Prakash Gajamer</h3> 
             <img src={Prakash}></img>
             <p>Hello, This is Prakash Gajamer. Former Computer Repair Technician in multiple places. To add up more knowledge/skills, I got interested in software field which motivates me to enroll at We Can Code It(WCCI) to learn how to Code.</p>


        </div>
        )
}


    
export default AboutPage