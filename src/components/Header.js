import React from 'react'

import { FaSearch} from "react-icons/fa";
import { AiOutlineHome} from "react-icons/ai";
import { IoIosPeople} from "react-icons/io";
import { MdWorkOutline} from "react-icons/md";
import { AiOutlineMessage} from "react-icons/ai";
import { GrNotification} from "react-icons/gr";
import {Avatar } from '@material-ui/core';
import "../styles/header.css"
import HeaderOption from './HeaderOption';


function Header() {
  return (
    <div className="header" fluid >
        <div className="header__left" >
            <div className="header__logo" >
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"/>
            </div>
            <div className="header__search" >
               <FaSearch/>
               <input type="text" placeholder="Search"/>
            </div>
        </div>
        <div className="header__rigth" >
          <HeaderOption style={{scale:"1.5"}} Icon={AiOutlineHome} title="Home" />
          <HeaderOption  Icon={IoIosPeople} title="My Network" style={{scale:"1.5"}}/>
          <HeaderOption Icon={MdWorkOutline} title="Works" />
          <HeaderOption Icon={AiOutlineMessage} title="Masseging" />
          <HeaderOption Icon={GrNotification} title="Notification" />
          <HeaderOption Avatar={Avatar} title="SaeB" />
          
        </div>  
    </div>
  )
}

export default Header