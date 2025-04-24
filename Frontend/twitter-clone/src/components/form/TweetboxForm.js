import React from 'react'
import "../../assets/styles/TweetboxForm.css"
import Avatar from "../avatar/Avatar.js"
import profilePicture from '../../assets/image/Profile.png'

function TweetboxForm() {
  return (
    <div className='tweetbox'>
        <form>
            <div className='tweetbox__input'>
                <Avatar username={"test"} image={profilePicture}/>
                <input placeholder="What's happening?" type="text" />
            </div>
            <button className='post-small-button'>
                Post
            </button>
        </form>
    </div>
  )
}

export default TweetboxForm