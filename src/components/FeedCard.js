import React, {useState} from "react";
import "./css/FeedCard.css"
import { BsHeart, BsChat, BsFillHeartFill } from "react-icons/bs";


function FeedCard({data, onLike, like}){

    const {id, name, photos, location, avg_price, cuisine, likes} = data
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
                <img  src={photos[0]}/>
                <div className="container">
                    <h2><b>{name}</b></h2>
                    <p  className={"flex-box alighn-between"}><span>{cuisine}</span><span>📍{location}</span></p>
                    <p>{avergaPrice()}</p>
                    <p className={"flex-box align-between"}>
                        <div>
                            <span>
                                {isLiked ? <BsFillHeartFill onClick={handleDislike} className="m-5" style={{ color: 'red', size: '50px' }}/>
                                : <BsHeart onClick={handleLike} className="m-5"/>}</span>
                            <BsChat className="m-5"/>
                        </div>
                        <button style={{textAlign: "end"}}>View More</button>
                    </p>
                    <p>{numLikes} likes</p>
                </div>
            </div>
        </>
    )
}

export default FeedCard