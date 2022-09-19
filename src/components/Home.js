import React from "react";
import { Route, Link} from "react-router-dom"
import "./css/image.css"
function Home(){
    return(
        <>
        <div className="el">
            <div className="mask" >
                <div className="home-container ">
                    <div>
                        <span className="logo-text-main">EPICURE</span>
                    </div>
                    <div className="button-container">
                        <Link to={`/feed`}>{<button className={"btn-primary"}>Find Restaurant</button>}</Link>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Home