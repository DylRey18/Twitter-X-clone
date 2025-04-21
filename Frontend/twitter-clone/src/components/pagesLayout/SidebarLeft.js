import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import "../../assets/styles/SidebarLeft.css"
import { FaXTwitter } from "react-icons/fa6";
import { MdHomeFilled, MdOutlineMailOutline } from "react-icons/md";
import { FaSearch,FaRegBookmark } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import Postbutton from '../button/Postbutton';
import Profilecard from '../card/Profilecard';

function SidebarLeft() {
  const [active, setActive] = useState("home"); // State for active item

  const menuItems = [
  { id: "", icon: <FaXTwitter className="sidebar-icon"/>, text: "" },
  { id: "home", icon: <MdHomeFilled className="sidebar-icon" />, text: "Home" },
  { id: "explore", icon: <FaSearch className="sidebar-icon" />, text: "Explore" },
  { id: "notifications", icon: <IoMdNotificationsOutline className="sidebar-icon" />, text: "Notifications" },
  { id: "messages", icon: <MdOutlineMailOutline className="sidebar-icon" />, text: "Messages" },
  { id: "bookmarks", icon: <FaRegBookmark className="sidebar-icon" />, text: "Bookmarks" },
  { id: "profile", icon: <IoPersonOutline className="sidebar-icon" />, text: "Profile" },

  ];

  return (
    <div className="sidebar-left">
      <div className='menu-items'>
      {menuItems.map((item) => (
        <Link
          key={item.id}
          to = {`/${item.id}`}
          className={`sidebar-item ${active === item.id ? "active" : ""}`} // Add active class
          onClick={() => setActive(item.id)} // Update active state on click
        >
          {item.icon}
          <span>{item.text}</span>
        </Link>
        ))}
        <Postbutton />
      </div>      
      <Profilecard/>
    </div>
  );
}

export default SidebarLeft