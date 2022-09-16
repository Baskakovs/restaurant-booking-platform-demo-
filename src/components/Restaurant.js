import React from "react";
import {Route} from "react-router-dom"
import RestaurantShow from "./RestaurantShow";

function Restaurant({feed}){
    return(
        <>
            <Route path={`/restaurant/:id`} >
                <RestaurantShow data={feed}/>
            </Route>
        </>
    )
}

export default Restaurant