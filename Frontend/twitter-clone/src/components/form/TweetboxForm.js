import React, {useState} from 'react'
import "../../assets/styles/TweetboxForm.css"
import Avatar from "../avatar/Avatar.js"
import profilePicture from '../../assets/image/Profile.png'
import { db, collection, addDoc } from "../pagesFunction/firebase"

function TweetboxForm() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();

    if (!tweetMessage.trim()) {
      alert("Please enter a message before posting!");
      return;
    }

    try {
      // Add a new document to the 'posts' collection
      await addDoc(collection(db, "posts"), {
        displayName: "test",
        username: "aaa",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: "",
      });

      // Reset input fields after submission
      setTweetMessage("");
      setTweetImage("");
    } catch (error) {
      console.error("Error adding tweet:", error);
    }
  };

  return (
    <div className='tweetbox'>
        <form>
            <div className='tweetbox__input'>
                <Avatar username={"test"} image={profilePicture}/>
                <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text" />
            </div>
            <button onClick={sendTweet} className='post-small-button'>
                Post
            </button>
        </form>
    </div>
  )
}

export default TweetboxForm