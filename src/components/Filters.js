import React, {useState} from "react";

function Filters({data, handleApply}){
    const [formData, setFormData] = useState({})
    
    function handleChangeCuisine(event){
        const name = event.target.name
        const value = event.target.value

        setFormData({...formData,
            cuisine: value 
        })
        
    }

    function handleCheckBox(event){
        const name = event.target.name
        const value = event.target.value

        setFormData({...formData,
        [name]: value})
    }
    console.log(formData)

    function onApply(){
        handleApply(formData)
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
                <select defaultValue={"hello"} onChange={handleChangeCuisine}>
                    <option value="" >I don't mind</option>
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
            <h3 className="text-center">Price:</h3>
            <div className="flex-box align-center">
                <div className="grid-container">
                   <div><input type="checkbox" name={30} onClick={handleCheckBox}/><label >€</label></div>
                   <div><input type="checkbox" name={60} onClick={handleCheckBox}/><label >€€</label></div>
                   <div><input type="checkbox" name={90} onClick={handleCheckBox}/><label >€€€</label></div>
                   <div><input type="checkbox" name={120} onClick={handleCheckBox}/><label >€€€€</label></div>
                </div>
            </div>
            <div className="flex-box align-center">
                <button onClick={onApply}>APPLY</button>
            </div>
        </div>
    )
}
export default Filters