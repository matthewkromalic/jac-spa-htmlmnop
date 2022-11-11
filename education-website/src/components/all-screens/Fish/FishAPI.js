import React, { useEffect, useState } from "react";
import { params, useParams } from "react-router-dom"
import './fish.css'
import { NavLink } from "react-router-dom";

const Fish = () => {
    const [fish, setFish] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        fetch(`https://www.fishwatch.gov/api/species/${params.species}`)
        .then((response) => response.json())
        .then((json) => setFish(json));

        if(fish){
            setLoading(false);
        }
    })
    return (
        <div>
            <div>
                <NavLink to="/">Main Screen</NavLink>
            </div>

            <div>
                <h5>Species</h5>
                {
                (loading ? <h3>Loading...</h3> :
                fish.map(species =>
                <a href={`species/${species}`}><p>{species.species}</p></a>)
                )
                }
            </div>
        </div>

    )
}
export default Fish;
