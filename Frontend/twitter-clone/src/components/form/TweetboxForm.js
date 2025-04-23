import React from 'react'
import "../../assets/styles/TweetboxForm.css"
import Avatar from "../avatar/Avatar.js"
import profilePicture from '../../assets/image/Profile.png'

function TweetboxForm() {
  return (
    <div>
        <form>
            <div>
                <Avatar username={"test"} image={profilePicture}/>
            </div>
            <button className='post-small-button'>
                Post
            </button>
        </form>
    </div>
  )
}

export default TweetboxForm