import React, {useState} from "react";
import "./css/FeedCard.css"
import { BsHeart, BsChat, BsFillHeartFill } from "react-icons/bs";
import { Route, Link} from "react-router-dom"
import Restaurant from "./Restaurant";
import { Button } from "semantic-ui-react";


function FeedCard({data, onLike, like }){

    const {id, name, photos, location, avg_price, cuisine, likes, area} = data
    const [isLiked, setIsLiked] = useState(false)
    const [numLikes, setNumLikes] = useState(likes)
    const avergaPrice = ()=>{
        switch(true){
        case (avg_price <= 30): 
            return "€"
            break;
        case (avg_price <= 60): 
            return "€€"
            break;
        case (avg_price <= 90):
            return "€€€"
            break;
        case (avg_price >= 120):
            return "€€€€"
            break;
        }
    }




    function handleLike(){
        setIsLiked(!isLiked)
        let newNum = numLikes + 1
        fetch(`http://localhost:3000/restaurants/${id}`,{
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                likes: newNum
            })
        })
        .then(res=>res.json())
        .then(obj=>setNumLikes(obj.likes))
    }

    function handleDislike(){
        setIsLiked(!isLiked)
        let newNum = numLikes - 1
        fetch(`http://localhost:3000/restaurants/${id}`,{
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                likes: newNum
            })
        })
        .then(res=>res.json())
        .then(obj=>setNumLikes(obj.likes))
    }
    return(
        <>
        
        
            <div className="card" value={like}>
                <div className="py-1 ps-1">📍{area}</div>
                <img  src={photos}/>
                <div className="container-card">
                    <h2><b>{name}</b></h2>
                    <p  className={"flex-box align-between"}><span>{cuisine}</span><span>{avergaPrice()}</span></p>
                    <div className={"flex-box align-between"}>
                        <div className=" heart">
                            <span className="mb-1">
                                {isLiked ? <BsFillHeartFill onClick={handleDislike} className="" style={{ color: 'red', size: '50px' }}/>
                                : <BsHeart onClick={handleLike} className=""/>}
                            </span>
                            <label className="heart-label ps-1">{numLikes} likes</label>
                        </div>
                        <Link to={`restaurant/${id}`} style={{textAlign: "end"}}>{<button className="view-more-button mb-1" >View More</button>}</Link>
                    </div>
                </div>
            </div>
            <Route path={`/restaurant`} >
            <Restaurant data={data}/>
        </Route>
        </>
    )
}

export default FeedCard