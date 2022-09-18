
import React, {useState} from "react"
import "./css/Feed.css"
import FeedCard from "./FeedCard"
import NavBar from "./NavBar"
import Filters from "./Filters"
import { useEffect } from "react"

function Feed(){

    const [data,setData] = useState([])
    const [feed, setFeed] = useState([])

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

    function setAreas(obj){
        setFeed(obj)
    }



    return(
        <>
        <NavBar onFilterPress={handleDisplaySearchMenu}/>
        {isSearch ? <Filters data={data} 
                       handleAreas={setAreas} /> : null}
        <div className={"containerFeed"}>
            <div>
                {
                    feed.map((post)=>{
                        return <FeedCard key={post.id} data={post}/>
                    })
                    
                }
            </div>
        </div>
        </>
    )
}

export default Feed