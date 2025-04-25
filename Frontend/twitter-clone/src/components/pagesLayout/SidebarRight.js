import React from 'react';
import "../../assets/styles/SidebarRight.css";
import {
  TwitterTweetEmbed
} from "react-twitter-embed"
import { CiSearch } from "react-icons/ci";

function SidebarRight() {
  return (
    <div className='sidebar-right'>
      
      {/* Search bar */}
      <div className='sidebar-right-input'>
        <CiSearch className='sidebar-right-searchIcon'/>
        <input placeholder="Search" type="text" />
      </div>

      {/* What's Happening */}
      <div className='sidebar-right-container'>
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId='1915572372842963181'/>

      </div>

    </div>
  )
}

export default SidebarRight