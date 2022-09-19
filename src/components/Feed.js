
import React, {useState} from "react"
import "./css/Feed.css"
import FeedCard from "./FeedCard"
import NavBar from "./NavBar"
import Filters from "./Filters"
import { useEffect } from "react"

function Feed(){

    const [data,setData] = useState([])
    const [feed, setFeed] = useState([])
    const [cuisines, setCuisine] = useState("")
    const [areas, setAreas] = useState("")

    useEffect(()=>{
    fetch(`http://localhost:3000/restaurants`)
    .then(res=>res.json())
    .then(obj=>setData(obj))
    },[])



    const [isSearch, setIsSearch] = useState(false)
    function handleDisplaySearchMenu(){
        setIsSearch(!isSearch)
    }

    function setArea(obj){
        setAreas(obj)
    }
    
    function setCuisines(array){
        setCuisine(array)
    }
   

    const display = data.filter((item)=>{
        let newDisplay = []
       if(areas == "" && cuisines == ""){
        return item
       } else if(areas == "" && cuisines != ""){
            for (let cuisine of cuisines){if(cuisine == item.cuisine)return item} 
       }else if(areas != "" && cuisines == ""){
            for (let area of areas){if(area == item.area)return item}
        }else if(areas != "" && cuisines != ""){
            for (let area of areas){
                for(let cuisine of cuisines){
                    if(area == item.area && cuisine == item.cuisine){
                        return item
                    }
                }
            }
        }
    })

    return(
        <>
        <NavBar onFilterPress={handleDisplaySearchMenu}/>
        {isSearch ? 
        <div className="filter-container " >
                        <Filters data={data} 
                        handleAreas={setArea} 
                        handleCuisine={setCuisines}/>
        </div> 
        :
        <div className={"containerFeed"}>
            <div>
                {
                    display.map((post)=>{
                        return <FeedCard key={post.id} data={post}/>
                    })
                    
                }
            </div>
        </div>
        }       
        </>
    )
}

export default Feed