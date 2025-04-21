import React from 'react'
import '../../assets/styles/ProfileCard.css'
import profilePicture from '../../assets/image/Profile.png'

function Profilecard() {
  return (
    <div className="profile-card">
      <img
        src={profilePicture} // Replace with the profile picture's URL
        alt="Profile"
        className="profile-picture"
      />
      <div className="profile-info">
        <span className="username">NierToTheMoon</span>
        <span className="handle">@CryptoMoonPog</span>
      </div>
    </div>
  );
}

export default Profilecard