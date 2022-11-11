import React, { useEffect, useState } from "react";
import './country.css'
import { NavLink } from "react-router-dom";

const Countries = () => {
    const [countries, setCountries] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then((response) => response.json())
        .then((json) => setCountries(json));

        if(countries){
            setLoading(false);
        }
    })
    return (
        <div>
            <div>
                <NavLink to="/">Main Screen</NavLink>
            </div>

            <div>
                <h5>Countries</h5>
                {
                (loading ? <h3>Loading...</h3> :
                countries.map(country =>
                <a href={`https://restcountries.com/v2/name/${country.name}`}><p>{country.name}</p></a>)
                )
                }
            </div>
        </div>

    )
}
export default Countries;
