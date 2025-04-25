import React from 'react'
import "../../assets/styles/Home.css"
import TweetboxForm from '../form/TweetboxForm'
import Post from '../card/Post.js'

function Home() {
  return (
    <div>
      <div className='home__header'>
        {/* header */}
        <h2>For you</h2>
      </div>
      <div className='home'>
        

          {/* Tweet box */}
          <TweetboxForm/>

          {/* post */}
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
                   {/* post */}
          {/* post */}
          {/* post */}
          {/* post */}
          {/* post */}
        
      </div>
    </div>
    
  )
}

export default Home