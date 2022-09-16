
import React, {useState} from "react"
import "./css/Feed.css"
import FeedCard from "./FeedCard"
import NavBar from "./NavBar"
import Filters from "./Filters"

function Feed({feed}){

    const [isSearch, setIsSearch] = useState(false)
    function handleDisplaySearchMenu(){
        setIsSearch(!isSearch)
    }
    return(
        <>
        <NavBar onFilterPress={handleDisplaySearchMenu}/>
        {isSearch ? <Filters data={feed}/> : null}
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