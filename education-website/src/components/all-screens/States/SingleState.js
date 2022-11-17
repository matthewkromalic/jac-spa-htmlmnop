import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

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

    return(
        <div class="statePage">
            {(loading ?<h3>Loading...</h3>:
            (<div>
                <h1>{state.name+" ("+state.abv+")"}</h1>
                <h3>Population: {state.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                <h3>Capital: {state.capital}</h3>
                <h3>Established in {state.yearEst}</h3>
                <h3>{state.name} has {state.electoralVotes} electoral votes</h3>



            </div>)


    )
    // (document.title = state.name)

}

    <div>
        <NavLink to = "/states">Back</NavLink>
    </div>
</div>

)
}
export default SingleState;