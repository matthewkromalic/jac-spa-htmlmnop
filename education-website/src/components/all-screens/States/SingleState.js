import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";





let stateName;
let factInput;

const SingleState = () => {
    const params = useParams();
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData(){
            const response = await fetch(`http://localhost:8080/states/${params.stateName}`)
            const data = await response.json()
            setState(data)
            setLoading(false)
        }
        fetchData();
    })

    const addFact = function(){
        factInput = document.querySelector(".funFactInput")
        if(factInput&&stateName){
        let newFactJson = {"text": factInput.value}
    
        let response = fetch(`http://localhost:8080/state/`+stateName+`/addFact`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newFactJson)
        })
    
        .then(res => res.json())
        .then(newFactJson => {
            factInput.value="";
        })}
    }

    return(
        <div className="statePage">
            {(loading ?<h3>Loading...</h3>:
            (<div>
                {stateName=state.name}
                <h1>{state.name+" ("+state.abv+")"}</h1>
                <h3>Population: {state.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                <h3>Capital: {state.capital}</h3>
                <h3>Established in {state.yearEst}</h3>
                <h3>{state.name} is worth {state.electoralVotes} electoral votes during a presidential election.</h3>
                {state.funFacts.length<1?<p></p>:<div>
                <h3>Some fun facts about {state.name}:</h3>
                {state.funFacts.map(fact => <p>{fact.text}</p>)}
                    </div>}
                <br></br>
                <h3>Do you know something interesting about {state.name}? You can add it to the list of fun facts!</h3>
                
                <input type="text" className="funFactInput" placeholder="Add your fun fact here!"></input>
                <button onClick={addFact} type="button" className="submitBTN">Submit</button>
                <br></br>
            </div>)



    )

}
    <div>
        <NavLink to = "/states">Back</NavLink>
    </div>
</div>

)
}
export default SingleState;