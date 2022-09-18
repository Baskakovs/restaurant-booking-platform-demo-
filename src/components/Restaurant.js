import React, { useEffect, useState } from "react";
import {Route, useParams} from "react-router-dom"
import RestaurantShow from "./RestaurantShow";

function Restaurant(){

    return(
        <>
            <Route path={`/restaurant/:id`} >
                <RestaurantShow />
            </Route>
        </>
    )
}

export default Restaurant