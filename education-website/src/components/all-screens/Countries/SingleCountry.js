import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

const SingleCountry = () => {
    const params = useParams();
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
  // var loading = true;
    useEffect(() => {
      async function fetchData(){
        const response = await fetch(`https://restcountries.com/v2/name/${params.countryName}`)
        const data = await response.json()
        setCountry(data)
        setLoading(false)
      }
      fetchData();
    },[])

      return(
        <div>
          {
          (loading ? <h3>Loading...</h3> :
          (<div>
            <h1>{country[0].name}</h1>
            <p>Capital : {country[0].capital}</p>
            <img src={country[0].flags.svg}/>
          </div>)
          )
          }
        </div>
        )

} 
export default SingleCountry;