import React from 'react';
import "../../assets/styles/SidebarLeft.css"
import { FaXTwitter } from "react-icons/fa6";
import { MdHomeFilled, MdOutlineMailOutline } from "react-icons/md";
import { FaSearch,FaRegBookmark } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

function SidebarLeft() {
  return (
    <div className='sidebar-left'>
      {/*x icon */}
      <div className={`sidebar-item active`}>
        <FaXTwitter className="sidebar-icon" />
      </div>
      <div className="sidebar-item">
        <MdHomeFilled className="sidebar-icon" />
        <span>Home</span>
      </div>
      <div className="sidebar-item">
        <FaSearch className="sidebar-icon" />
        <span>Explore</span>
      </div>
      <div className="sidebar-item">
        <IoMdNotificationsOutline className="sidebar-icon" />
        <span>Notifications</span>
      </div>
      <div className="sidebar-item">
        <MdOutlineMailOutline className="sidebar-icon" />
        <span>Messages</span>
      </div>
      <div className="sidebar-item">
        <FaRegBookmark className="sidebar-icon" />
        <span>Bookmarks</span>
      </div>
      <div className="sidebar-item">
        <IoPersonOutline className="sidebar-icon" />
        <span>Profile</span>
      </div>
    </div>   

  )
}

export default SidebarLeft