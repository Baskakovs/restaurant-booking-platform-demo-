import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './css/restaurantShow.css'
import { IoMdArrowBack } from "react-icons/io";
import Map from "./Map"

function RestaurantShow(){
    const [data, setData] = useState([])

    const params = useParams()
    const paramsId = params.id

    useEffect(()=>{
        fetch(`http://localhost:3000/restaurants/${paramsId}`)
        .then(res=>res.json())
        .then(obj=>setData(obj))
        },[])



    const {id, name, cuisine, location, area, comments, description, avg_price, photos} = data

    const history = useHistory()

    function goBack(){
        history.goBack()
    }

    const avergaPrice = ()=>{
        switch(true){
        case (avg_price <= 30): 
            return "€"
            break;
        case (avg_price <= 60): 
            return "€€"
            break;
        case (avg_price <= 90):
            return "€€€"
            break;
        case (avg_price >= 90):
            return "€€€€"
            break;
        }
    }

    let gallery = [photos]

    return(
        <>
        <div>
            <button className={"back-button"} onClick={goBack}><IoMdArrowBack className={"back-arrow"}/><span className="text">Back</span></button>
            <Slide>
                {gallery.map((photo)=>{
                    return <div className="each-slide-effect">
                                <img src={photo} />
                            </div>  
                })
                } 
            </Slide>
            <div className="flex-box align-center">
                <span>{area} | {cuisine} | {avergaPrice()}</span>
            </div>
            <h2 className="text">{name}</h2>
            <span>Menu (PDF)</span>
            <p>{description}</p>
            
        </div >

        <Map style={{height: "10000px"}} location={location}/>
        </>
        
    )
}

export default RestaurantShow