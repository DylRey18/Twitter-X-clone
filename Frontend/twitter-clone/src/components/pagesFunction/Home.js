import React from 'react'
import "../../assets/styles/Home.css"
import TweetboxForm from '../form/TweetboxForm'
import Post from '../card/Post.js'
import dyl from '../../assets/image/Dylpp.png'


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
          <Post displayName="Dylan Theodore" username="dylclone" verified={true} text={"This is from Dylan"} avatar={dyl} image="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGJycGVjODRycWlrdXQ3aWp0dHU3Z3FjdmIzbDhneHE5bjU2N3RwNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kYNVwkyB3jkauFJrZA/giphy.gif"/>
          <Post displayName="iAmABot" username="bottwitter" verified={false} text={"This is from Dylan"} avatar={dyl}/>
          <Post displayName="Dylan Theodore" username="dylclone" verified={true} text={"This is from Dylan"} avatar={dyl}/>
                   
        
      </div>
    </div>
    
  )
}

export default Home