import React, { useEffect, useState } from "react";
import { NavLink, useParams } from 'react-router-dom'

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
                                                                                           {/* take number and adds commas. found online */}
            <p>{country[0].name} is a unique country with a capital of {country[0].capital} and a population of {country[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}. 
            One common language there is {country[0].languages[0].name} which is given the native name of {country[0].languages[0].nativeName}. The 
            people from there are generally called {country[0].demonym}s. The currency in {country[0].name} is called {country[0].currencies[0].name} with 
             a currency symbol of {country[0].currencies[0].symbol}. {country[0].name} is in {country[0].region} more specifically {country[0].subregion}</p>
            <img src={country[0].flags.svg}/>
          </div>)
          )
          }
          <div>
            <NavLink to = "/country">Back</NavLink>
          </div>
        </div>
        )

} 
export default SingleCountry;