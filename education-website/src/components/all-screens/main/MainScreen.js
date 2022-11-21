
import { Link } from "react-router-dom";
import "./main.css"
import Question from "../images/question.gif"
const MainScreen = () => {

    function RNum() {
            let test = Math.floor(Math.random() * 3);
            if(test == 0){
                return "/country"
            }
            else if(test == 1){
                return "/nasa"
            }
            else{
                return "/states"
            }
            } 
    return(
            <div className="mainScreen">
        <h1>Welcome to JAC'S Mystery Educator</h1>
            <Link to={RNum()}>
                <img src={Question}/>
                </Link>   

            <p>Lets learn something new!</p>
        </div>  
    )
}

export default MainScreen


