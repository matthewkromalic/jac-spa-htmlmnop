import React from "react";
import Aidan from "../images/Headshot 2.png"
import Omar from "../images/Omar.JPG"
import "./about.css"
import Matthew from "../images/matthew.jpg"

import Prakash from "../images/Pk.JPEG"

const AboutPage = () => {
    
    return(
        
        <div className="about">

             <h1>About Us</h1>

             <h3>Omar Alkhulaidi</h3>
             <img src={Omar}></img>   
             <p>Hi! My name is Omar Alkhulaidi and I'm currently a student at WeCanCodeit. I have always admire and believe in technology and dreamed to become a Software Developer. I began my journey as a Software Developer with intensive full-stack java, back-end and front-end bootcamp and now dreams of landing my first job in the industry. I live in Hilliard, Ohio and participate in soccer every Sunday and Thursday</p>
             <a className="Linkedin" href="http://linkedin.com/in/omar-alkhulaidi-76ab111aa">linkedin</a>
             <a className="Github" href="http://github.com/don90omar">Github</a>

            <h3>Aidan Eisele</h3>
             <img src={Aidan}></img>
             <p>I'm a former barber looking to make a jump into the IT field through a full stack Java bootcamp at We Can Code It. I hope to start my career in an enviornment that allows me to work with people and potentially move into a postion like recruiting or client/company relationships.</p>
             <a id="Linkedin" href="https://www.linkedin.com/in/aidan-eisele-5301a619b/">Linkedin</a>
             <a id="Github" href="https://github.com/eiseleaidan">Github</a>
             
             <h3>Prakash Gajamer</h3> 
             <img src={Prakash}></img>
             <p>Hello, This is Prakash Gajamer. Former Computer Repair Technician in multiple places. To add up more knowledge/skills, I got interested in software field which motivates me to enroll at We Can Code It(WCCI) to learn how to Code.</p>
        
            <h3>Matthew Kromalic</h3>
             <img src={Matthew}></img>
             <p>Hello, My name is Matthew Kromalic and I am currently enrolled in the WeCanCodeIT fullstack bootcamp. Before the bootcamp, I was freshly graduated out of highschool and looking for a great opportunitiy in something I enjoy, so I landed in the Tech field. I'm looking forward to start my carrer and find what great opportunities might emerge.</p>
             <a className="Linkedin" href="https://www.linkedin.com/in/matthew-kromalic/">Linkedin</a>
             <a className="Github" href="https://github.com/matthewkromalic">Github</a>
        </div>
        )
}


    
export default AboutPage