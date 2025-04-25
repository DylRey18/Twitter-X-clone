import React from 'react'
import "../../assets/styles/Post.css"
import Avatar from '../avatar/Avatar.js'
import profilePicture from '../../assets/image/Profile.png'
import { MdVerified } from "react-icons/md";
import { FaRegBookmark,FaRegComment,FaRetweet  } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
// IoMdHeart , FaBookmark
//Essentialy the same as tweet card
function Post(
  {
    displayName,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar
  }
) {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar username={"test"} image={profilePicture}/>
      </div>
      {/* Body */}
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
              <h3>
                Dyl <span className='post__headerSpecial'> <MdVerified className='post__badge'/> @dylpog </span>
              </h3>
          </div>
          <div className="post__headerDescription">
            <p>This is the post header</p>
          </div>
        </div>
        <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZvdXNqMWE5N3hxb2x6NjVhZ3MxZ2gxdDU4NzU5cmt6N241cnQxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FBZjLPUa166w8/giphy.gif" 
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