import React from 'react'
import "../../assets/styles/Post.css"
import Avatar from '../avatar/Avatar.js'
import profilePicture from '../../assets/image/Profile.png'
import { MdVerified } from "react-icons/md";
import { FaRegBookmark,FaRegComment,FaRetweet  } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
// IoMdHeart , FaBookmark
//Essentialy the same as tweet card
function Post({displayName,username,verified,timestamp,text,image,avatar}) {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar username={displayName} image={avatar}/>
      </div>
      {/* Body */}
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
              <h3>
                {displayName} <span className='post__headerSpecial'> {verified && <MdVerified className='post__badge'/>} @{username} </span>
              </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} 
        alt="" />
        <div className='post__footer'>
          <FaRegBookmark/>
          <IoMdHeartEmpty/>
          <FaRegComment/>
          <FaRetweet/>
        </div>
      </div>
    </div>
  )
}

export default Post