
import React, {useState} from "react"
import "./css/Feed.css"
import FeedCard from "./FeedCard"
import NavBar from "./NavBar"
import Filters from "./Filters"

function Feed({ feed }){

    const [isSearch, setIsSearch] = useState(false)
    const [fil, setFilter] = useState("")
    function handleDisplaySearchMenu(){
        setIsSearch(!isSearch)
    }

    function handleApply(formData){
        setFilter(formData)
        setIsSearch(!isSearch)
        const keyss = Object.keys(formData)
        let areas = []
        let prices = keyss.filter((item)=>{
            console.log(typeof item)
        })
        prices.sort((a,b)=>{
            if (a > b) return 1
            else return -1
        })
        console.log(prices[0])
        
        // function highestPrice() {
        //     for(let i = 0; i < prices.length-1; i++){
        //         if(prices[i] > prices[i+1]){
        //             console.log( prices[i])
        //         }else{
        //             console.log( prices[i+1])
        //         }
        //     }
        // }
        // highestPrice()
    }
    const feedFilter = feed.filter((item)=>{
        if(fil == ""){
            return feed
        }else{
            switch(true){
                case item.cuisine == fil.cuisine:
                    return item
                    break
                // case item.area.includes():
                //     return 
            }
        }
    })




    
    return(
        <>
        <NavBar onFilterPress={handleDisplaySearchMenu}/>
        {isSearch ? <Filters data={feed} handleApply={handleApply}/> : null}
        <div className={"containerFeed"}>
            <div>
                {
                    feedFilter.map((post)=>{
                        return <FeedCard key={post.id} data={post}/>
                    })
                    
                }
            </div>
        </div>
        </>
    )
}

export default Feed