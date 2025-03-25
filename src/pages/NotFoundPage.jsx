import React from 'react'
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../assets/css/style.css"
import "../assets/css/smallScreen.css"

const NotFoundPage = () => {
  return (
    <div className='notfoundpage'>
      <FaExclamationTriangle size={100} color='#F2B636'/>
      <h1>Page Not Found</h1>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default NotFoundPage