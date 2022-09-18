import React, {useEffect, useState} from "react";
import Restaurant from "./Restaurant";

function Filters({data, handleCuisine, handleAreas}){
    const [formData, setFormData] = useState([])
    const [cuisineData, setCuisineData] = useState([])
    const [checked, setChecked] = useState([])
    const [display, setDisplay] = useState([])

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
            handleAreas(newDisplay)
            
        }, [formData])


  



    


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
            <div className="flex-box align-center">
                <button >APPLY</button>
            </div>
        </div>
    )
}
export default Filters