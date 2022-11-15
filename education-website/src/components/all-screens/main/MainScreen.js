
import { Link } from "react-router-dom";
import NasaPage from "../NasaAPI";
import "./main.css"
import Question from "../images/question.gif"
const MainScreen = () => (

    
    <div className="mainScreen">

        <h1>Welcome to JAC'S Mystery Educator</h1>

        <Link to="/country">
         <img src={Question} width="100"/>
         </Link>   
         <p>Lets learn something new!</p>
    </div>
)

export default MainScreen


