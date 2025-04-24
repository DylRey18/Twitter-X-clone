import React from 'react'
import "../../assets/styles/Post.css"
import Avatar from '../avatar/Avatar.js'
import profilePicture from '../../assets/image/Profile.png'
import { MdVerified } from "react-icons/md";

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
                Dyl <span> <MdVerified/> </span>
              </h3>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Post