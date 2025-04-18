import React from 'react';
import "../../assets/styles/SidebarLeft.css"
import { FaXTwitter } from "react-icons/fa6";
import { MdHomeFilled, MdOutlineMailOutline } from "react-icons/md";
import { FaSearch,FaRegBookmark } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

function SidebarLeft() {
  return (
    <div className='sidebar'>
      {/*x icon */}
      <FaXTwitter />
      {/*home*/}
      <MdHomeFilled />
      {/*explore*/}
      <FaSearch/>
      {/*notification*/}
      <IoMdNotificationsOutline/>
      {/*message*/}
      <MdOutlineMailOutline />
      {/*bookmark*/}
      <FaRegBookmark/>
      {/*Profile*/}
      <IoPersonOutline/>
    </div>   

  )
}

export default SidebarLeft