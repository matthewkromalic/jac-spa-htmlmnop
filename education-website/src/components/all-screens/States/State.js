import React, { useEffect, useState } from "react";
import "./State.css"




const States = () =>{
    const [states, setStates] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('http://localhost:8080/states')
        .then((response) => response.json())
        .then((json) => setStates(json));

        if(states){
            setLoading(false);

        }
    })

    return(
        <div className="statePage">
            <h1>States</h1>
            {loading ? <h3>Loading...</h3> :
            states.map(state => 
            <a href={`/states/${state.name}`}><p>{state.name}</p></a>)}
        </div>
    )

    const page = document.querySelector(".page")
    page.classList.toggle("statePage")
}

export default States