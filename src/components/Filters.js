import React, {useEffect, useState} from "react";
import Restaurant from "./Restaurant";

function Filters({data, handleAreas, handleCuisine}){
    const [formData, setFormData] = useState([])
    const [cuisineData, setCuisineData] = useState([])

    function handleCheckBox(event){
        const name = event.target.name
        const checked = event.target.checked
        let newList 
       
        if(checked === true){
            setFormData([...formData, name])
        }else if(checked === false){
            newList = formData.filter((item)=>{
                if(name != item) return item;
            }
            )
            setFormData(newList)
        }
    }

    function handleCuisineCheck(event){
        const name = event.target.name
        const checked = event.target.checked
        let newList 

       
        if(checked === true){
            setCuisineData([...cuisineData, name])
        }else if(checked === false){
            newList = cuisineData.filter((item)=>{
                if(name != item) return item;
            }
            )
            setCuisineData(newList)
        }
    }

    useEffect(()=>{
        const area = Object.values(formData)

        handleAreas(area)
        handleCuisine(cuisineData)
        
    }, [formData, cuisineData])


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

    return(
        <div className="filter-container">
            <h3 className="text-center">Cuisine:</h3>
            <div className="flex-box align-center">
                <div className="grid-container">
                    {filteredCuisines.map((item)=>{
                        return <div className="col-item"><input type="checkbox" name={item} onClick={handleCuisineCheck}/> <label >{item}</label></div>
                    })}
                </div>
            </div>

            <h3 className="text-center">Area:</h3>
            <div className="flex-box align-center">
                <div className="grid-container">
                    {filteredAreas.map((item)=>{
                        return <div className="col-item"><input type="checkbox" name={item} onClick={handleCheckBox}/> <label >{item}</label></div>
                    })}
                </div>
            </div>

        </div>
    )
}
export default Filters