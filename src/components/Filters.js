import React, {useEffect, useState} from "react";
import Restaurant from "./Restaurant";

function Filters({data, handleCuisine, handleAreas, setCuisine}){
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

    useEffect(()=>{
        const area = Object.values(formData)
        let newDisplay = []
        data.filter((restaurant)=>{
            return area.filter((item)=>{
                if(restaurant.area === item) return newDisplay = [...newDisplay, restaurant]
            })
        })
        handleAreas(area)
        
    }, [formData])

    function handleCuisine(event){
        const value = event.target.value
        setCuisine(value)
    }

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
                <select onChange={handleCuisine}>
                    <option value={"I don't mind"} >I don't mind</option>
                    {filteredCuisines.map((item)=>{
                        return <option name={"cuisine"} value={item}>{item}</option>
                    })}
                </select>
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