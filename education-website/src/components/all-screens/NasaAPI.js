import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import './Nasa.css'


const NasaPage = () =>{
    

    const[images, setImages] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        fetch('https://images-api.nasa.gov/asset/as11-40-5874')
        .then((response)=>response.json())
        .then((json)=>setImages(json));

        if(images){
            setLoading(false);
        }
    })

    return(
        <div>
            <h3>Learn about NASA</h3>
            {
                (loading ? <h3>Loading...</h3>:
                <img src ={images.collection.items[0].href} ></img>        
              )

            }
        </div>

    )
}

export default NasaPage