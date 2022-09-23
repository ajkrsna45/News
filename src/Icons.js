import React from "react"
import "./App.css"

import { FaTimes,FaRegCircle,Fapen, FaPen } from "react-icons/fa";
const Icons=({choice})=>{
    switch(choice){
        case "cross":
            return <FaTimes className="Icon"/>;
        case "circle":
            return <FaRegCircle className="Icon"/>;
        default:
            return <FaPen className="Icon"/>;
    }
}
    // return(
    //     <FaTimes className="Icon" style={{color:"red",}}/>
    // )

export default Icons