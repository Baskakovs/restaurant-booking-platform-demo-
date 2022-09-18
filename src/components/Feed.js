
import React, {useState} from "react"
import "./css/Feed.css"
import FeedCard from "./FeedCard"
import NavBar from "./NavBar"
import Filters from "./Filters"
import { useEffect } from "react"

function Feed(){

    const [data,setData] = useState([])
    const [feed, setFeed] = useState([])
    const [cuisine, setCuisine] = useState("")
    const [areas, setAreas] = useState("")

    useEffect(()=>{
    fetch(`http://localhost:3000/restaurants`)
    .then(res=>res.json())
    .then(obj=>setData(obj))
    },[])

    useEffect(()=>{
        setFeed(data)
    },[data])



    console.log()
    const [isSearch, setIsSearch] = useState(false)
    function handleDisplaySearchMenu(){
        setIsSearch(!isSearch)
    }

    function setArea(obj){
        setAreas(obj)
    }


    
    // function setCuisines(value){
    //     let newDisplay = []
    //     display.filter((item)=>{
    //         if(item.cuisine == value) return newDisplay = [...newDisplay, item]
    //     })
    //     display = newDisplay
    //     console.log(newDisplay)
    // }

    function setCuisines(value){
        setCuisine(value)
    }
    console.log(`Cuisine: ${cuisine}; Areas: ${areas}`)

    const display = data.filter((item)=>{
        let newDisplay = []
       if(areas == "" && cuisine == ""){
        return item
       } else if(areas == "" && cuisine != ""){
            if(item.cuisine == cuisine) return newDisplay = [...newDisplay, item]  
       }else if(areas != "" && cuisine == ""){
            for (let area of areas){if(area == item.area)return item}
        }else if(areas != "" && cuisine != ""){
            for (let area of areas){
                if(area == item.area && cuisine == item.cuisine){
                     return item
                }
            }
        }
    })
    console.log("display",display)
    return(
        <>
        <NavBar onFilterPress={handleDisplaySearchMenu}/>
        {isSearch ? <Filters data={data} 
                       handleAreas={setArea} 
                       setCuisine={setCuisines}/> : null}
        <div className={"containerFeed"}>
            <div>
                {
                    display.map((post)=>{
                        return <FeedCard key={post.id} data={post}/>
                    })
                    
                }
            </div>
        </div>
        </>
    )
}

export default Feed