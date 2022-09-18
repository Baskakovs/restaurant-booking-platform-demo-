import React, {useEffect} from "react";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./css/google.css"
function Map({location}){
    const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyCft12k2S1ihcCbpm031uzxXSO_H2lr33s",}) 
    if(!isLoaded) return 

    console.log(location)
    const coordinates = location.split(",")
    console.log(coordinates)
    return(
        <>
            
            <GoogleMap zoom={11} center={{lat: 56.96, lng:	24.11}} mapContainerClassName={"map-container"} style={{height: "100px"}}>
                <Marker position={{lat: parseFloat(coordinates[0]), lng: parseFloat(coordinates[1])}}/>
            </GoogleMap>

        </>
    
    ) 
}

export default Map