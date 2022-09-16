import React, {useState} from "react";
import {BsFilterRight} from "react-icons/bs"

function NavBar({onFilterPress}){
    return(
        <ul>
            <li className="align-left">EPICURE</li>
            <li className="align-right" onClick={onFilterPress}><BsFilterRight label={"Filter"} style={{fontSize: "30px"}}/></li>
        </ul>
    )
}

export default NavBar