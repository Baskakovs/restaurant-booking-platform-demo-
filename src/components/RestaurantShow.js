import React from "react";
import {useParams} from "react-router-dom"

function RestaurantShow({data}){
    const params = useParams()
    const paramsId = params.id
    const mData = data.filter((item)=>{
        if(item.id == paramsId) return item
    })
    const {avg_price, comments, cuisine, description, id, likes, location, name, photos} = mData[0]
    return(
        <div>
        <h2 className="tex-">{name}</h2>
        </div>
    )
}

export default RestaurantShow