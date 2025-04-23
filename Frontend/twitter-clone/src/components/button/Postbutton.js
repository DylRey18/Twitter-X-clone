import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/Postbutton.css'


function Postbutton() {
  return (
    <Link to="/post">
        <button className='post-button'>
        <p>Post</p>
        </button>
    </Link>
  )
}

export default Postbutton
