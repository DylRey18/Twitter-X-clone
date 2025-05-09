import React, {useEffect, useState} from 'react'
import "../../assets/styles/Home.css"
import TweetboxForm from '../form/TweetboxForm'
import Post from '../card/Post.js'
import dyl from '../../assets/image/Dylpp.png'
import anila from '../../assets/image/Anila.png'
import reddit from '../../assets/image/reddit.png'
import { db, collection, onSnapshot } from "./firebase"
//import db from '../../../../../Backend/src/firebase.js'


function Home() {

  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   db.collection('posts').onSnapshot(snapshot => (
  //     setPosts(snapshot.docs.map(doc => doc.data()))
  //   ))
  // }, []) 
  useEffect(() => {
    // Use Firestore's onSnapshot to listen to changes in the 'posts' collection
    const collectionRef = collection(db, "posts");
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    // Cleanup function to unsubscribe from Firestore updates when the component unmounts
    return unsubscribe;
  }, []);

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
          {/* Render posts dynamically */}
          {posts.map((post) => (
            <Post
              displayName={post.displayName || "Unknown User"}
              username={post.username || "unknown"}
              verified={post.verified || false}
              text={post.text || ""}
              avatar={post.avatar || dyl} // Default avatar if not provided
              image={post.image || ""}
            />
          ))}
          <Post displayName="Dylan Theodore" username="dylclone" verified={true} text={"This is from Dylan"} avatar={dyl} image="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGJycGVjODRycWlrdXQ3aWp0dHU3Z3FjdmIzbDhneHE5bjU2N3RwNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kYNVwkyB3jkauFJrZA/giphy.gif"/>
          <Post displayName="iAmABot" username="bottwitter" verified={false} text={"Happy Birthday!"} avatar={reddit} image="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXozNnY5anoxd2pnYzl2azRhNm4wMnBlYTdicjZ3cnNxOG8zc2xiaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h3WH1rqyW2bmfOVqSi/giphy.gif"/>
          <Post displayName="Anila la" username="anilul" verified={false} text={"Let's Dance!!!"} avatar={anila} image="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmFicGs0YnVieGkwYmlxbmYybGw3NXBpYnQxdTJzNzVqMzFxN3V6aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kyLYXonQYYfwYDIeZl/giphy.gif"/>
          
      </div>
    </div>
    
  )
}

export default Home