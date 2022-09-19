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


    return(
        <>
        <div>
            <button className={"back-button"} onClick={goBack}><IoMdArrowBack className={"back-arrow"}/><span className="text">Back</span></button>

            <img src={photos}/>
            <div className="flex-box align-center">
                <><span className="text-light">{area} | {cuisine} | {avergaPrice()}</span></>
            </div>
            <div className="px-1">
                <h2 className="title">{name}</h2>
                <span>Menu (PDF)</span>
                <p>{description}</p>
            </div>
            
        </div >

            <Map style={{height: "10000px"}} location={location}/>
        </>
        
    )
}

export default RestaurantShow