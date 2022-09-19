import React from "react";
import {BsFilterRight} from "react-icons/bs"
import "./css/nav-bar.css"

function NavBar({onFilterPress}){
    return(
        <ul className="sticky nav-bar">
            <li className="align-left logo-text">EPICURE</li>
            <li className="align-right filter-symbol" onClick={onFilterPress}><BsFilterRight label={"Filter"} style={{fontSize: "30px"}}/><label>Filter</label></li>
        </ul>
    )
}

export default NavBar