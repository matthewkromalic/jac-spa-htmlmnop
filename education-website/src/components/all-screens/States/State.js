import React, { useEffect, useState } from "react";

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
        <div>
            <h3>States</h3>
            {loading ? <h3>Loading...</h3> :
            states.map(state => 
            <p>{state.name}</p>)}
        </div>
    )
}

export default States