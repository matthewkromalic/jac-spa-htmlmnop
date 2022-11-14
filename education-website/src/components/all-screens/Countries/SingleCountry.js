import React, { useEffect, useState } from "react";
import Countries from "./Country";
import { useParams } from 'react-router-dom'

const SingleCountry = (props) => {
    const params = useParams();
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        
        fetch(`https://restcountries.com/v2/name/${props.countryName}`)
        .then((response) => response.json())
        .then((json) => setCountry(json));
    },[])
    // fetch(`https://restcountries.com/v2/name/${params.country.name}`)
    // console.log(params)
      console.log(props.countryName)
      return(
        <h1>{props.countryName}</h1>
        )

} 
export default SingleCountry;