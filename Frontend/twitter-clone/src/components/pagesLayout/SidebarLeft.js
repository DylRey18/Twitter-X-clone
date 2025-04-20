import React, { useState } from 'react';
import "../../assets/styles/SidebarLeft.css"
import { FaXTwitter } from "react-icons/fa6";
import { MdHomeFilled, MdOutlineMailOutline } from "react-icons/md";
import { FaSearch,FaRegBookmark } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

function SidebarLeft() {
  const [active, setActive] = useState("home"); // State for active item

  const menuItems = [
    { id: "X", icon: <FaXTwitter className="sidebar-icon"/>, text: "" },
    { id: "home", icon: <MdHomeFilled className="sidebar-icon" />, text: "Home" },
  { id: "explore", icon: <FaSearch className="sidebar-icon" />, text: "Explore" },
  { id: "notifications", icon: <IoMdNotificationsOutline className="sidebar-icon" />, text: "Notifications" },
  { id: "messages", icon: <MdOutlineMailOutline className="sidebar-icon" />, text: "Messages" },
  { id: "bookmarks", icon: <FaRegBookmark className="sidebar-icon" />, text: "Bookmarks" },
  { id: "profile", icon: <IoPersonOutline className="sidebar-icon" />, text: "Profile" },

  ];

  return (
    <div className="sidebar-left">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`sidebar-item ${active === item.id ? "active" : ""}`} // Add active class
          onClick={() => setActive(item.id)} // Update active state on click
        >
          {item.icon}
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}

export default SidebarLeft