import React, { useEffect, useState } from "react";
import './country.css'
import SingleCountry from "./SingleCountry";
import { NavLink } from "react-router-dom";

const Countries = () => {
    const [countries, setCountries] = useState([]);
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
        <h1 id="countriesTitle">Countries</h1>
            <div className="full">
            
                <div className="grid1" >
                {
                (loading ? <h3>Loading...</h3> :
                countries.map(country => 
                <img className="imgflag" src={country.flags.png}/>
                ))}
                </div>

                <div className="grid2">
                {
                (loading ? <h3>Loading...</h3> :
                countries.map(country =>
                <a className="SCBTN" href={`/singlecountry/${country.name}`}><p>{country.name}</p></a>
                ))}
                </div>
                
                <div className="grid3" >
                {
                (loading ? <h3>Loading...</h3> :
                countries.map(country => 
                <img className="imgflag" src={country.flags.png}/>
                ))}
                </div>
        </div> 
    </div>
    )
}
export default Countries;