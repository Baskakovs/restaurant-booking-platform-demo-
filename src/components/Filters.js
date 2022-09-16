import React from "react";

function Filters({data}){

    let cuisines = data.map((item)=>{
        return item.cuisine
    })
    let filteredCuisines = cuisines.filter(function(item, pos) {
        return cuisines.indexOf(item) == pos;
    })

    let areas = data.map((item)=>{
        return item.area
    })
    let filteredAreas = areas.filter(function(item, pos) {
        return areas.indexOf(item) == pos;
    })



    console.log(filteredAreas)




    return(
        <div className="filter-container">
            <h3 className="text-center">Cuisine:</h3>
            <div className="flex-box align-center">
                <select defaultValue={"hello"}>
                    <option value="" >I don't mind</option>
                    {filteredCuisines.map((item)=>{
                        return <option value={item}>{item}</option>
                    })}
                </select>
            </div>

            <h3 className="text-center">Area:</h3>
            <div className="flex-box align-center">
                <div className="grid-container">
                    {filteredAreas.map((item)=>{
                        return <div className="col-item"><input type="checkbox" name="" id=""/> <label >{item}</label></div>
                    })}
                </div>
            </div>
            <h3 className="text-center">Price:</h3>
            <div className="flex-box align-center">
                <div className="grid-container">
                   <div><input type="checkbox" name="" id=""/><label >€</label></div>
                   <div><input type="checkbox" name="" id=""/><label >€€</label></div>
                   <div><input type="checkbox" name="" id=""/><label >€€€</label></div>
                   <div><input type="checkbox" name="" id=""/><label >€€€€</label></div>
                </div>
            </div>
        </div>
    )
}
export default Filters