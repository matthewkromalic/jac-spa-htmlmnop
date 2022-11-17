
import React, { useEffect, useState } from "react";
import './Nasa.css'
import nasa from "../NASA/nasa logo.png"
import apollo from "../NASA/Apollo11.png"
import rocket from "../NASA/rocket.png"
import { NavLink } from "react-router-dom"

function reload(){
    window.location.reload();
}
const NasaPage = () =>{
    

    const[images, setImages] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        fetch('https://images-api.nasa.gov/search?q=apollo%2011')
        .then((response)=>response.json())
        .then((json)=>setImages(json));

        if(images){
            setLoading(false);
        }
    })

    return(
        <div>
            
            <h1> LEARN ABOUT NASA </h1>
            <section class="nasa1">
            <img src={nasa}></img>
            </section>

            <section class="nasa2">
            <img src={apollo}></img>
            </section>

            <section class="nasa3">
            <img src={rocket}></img>
            </section>

            {
                (loading ? <h3>Loading...</h3>:
                // console.log(images)
                images.collection.items.map(item=> 
                <div className="nasaElement" id={item.data[0].nasa_id}>
                    
                    <h3>{item.data[0].title}</h3>
                    <p>{item.data[0].description}</p>
                    {item.links ? <img src={item.links[0].href}></img>: <br></br>}
                </div>)
            
                )

            }
        <div className="centerBTN">
            <NavLink id="top" className="topBTN" to="/">Home</NavLink>
            <NavLink id="home" className="topBTN" onClick = {reload} to="/nasa">Back to top</NavLink>
        </div>
        </div>

    )
}

export default NasaPage