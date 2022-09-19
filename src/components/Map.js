import React, {useEffect, useState} from "react";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./css/google.css"
function Map({location}){

    // setCoord({lat: parseInt(location[0]), lng: parseInt(location[1])})



    const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyCft12k2S1ihcCbpm031uzxXSO_H2lr33s",}) 
    if(!isLoaded) return <h1>Loading ...</h1>



    return(
        <>
            
            <GoogleMap zoom={11} center={{lat: 56.96, lng:	24.11}} mapContainerClassName={"map-container"} style={{height: "100px"}}>
                <Marker position={location}/>
            </GoogleMap>

        </>
    
    ) 
}

export default Map