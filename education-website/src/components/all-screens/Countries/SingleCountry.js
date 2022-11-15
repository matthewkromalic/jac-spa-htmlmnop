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
        // fetch(`https://restcountries.com/v2/name/${params.countryName}`)//.then((response) => console.log(response))
        // .then((response) => response.json())
        // .then((json) => setCountry(json))
        // console.log(country)

    },[])
        // if(country){
        //   var loading = false
        // }
    // fetch(`https://restcountries.com/v2/name/${params.country.name}`)
    // console.log(params)
      // console.log(props.countryName)
      return(
        <div>
          {
          (loading ? <h3>Loading...</h3> :
          (<div>
            <h1>{country[0].name}</h1>
            <p>Capital : {country[0].capital}</p>
          </div>)
          )
          }
        </div>
        )

} 
export default SingleCountry;