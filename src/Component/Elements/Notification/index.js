import React from "react";
import {IoMdNotifications} from "react-icons/io";
import {FiChevronDown} from "react-icons/fi"

const Notification = ()=>{
    return(
        <div className="Notic">
        <span className="m-2"><IoMdNotifications/></span>
        <img src="Assets/image/user.jpeg"/>
        <span className="m-2"><FiChevronDown/></span>
        </div>
    );
}
export default Notification; 