import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <div>
            {(loading ?<h3>Loading...</h3>:
            (<div>
                <h1>{state.name}</h1>
                <h3>Capital: {state.capital}</h3>
                <h3>Population: {state.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>

            </div>)
    )
}
</div>

)
}
export default SingleState;