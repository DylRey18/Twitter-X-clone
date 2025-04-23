import React from 'react'
import { Link } from 'react-router-dom'
import "../../assets/styles/Avatar.css"


function Avatar({username,image}) {
  return (
    <Link to={`/profile`} >
        <img className='avatar-picture' src={image} alt="Avatar" />
    </Link>
  )
}

export default Avatar