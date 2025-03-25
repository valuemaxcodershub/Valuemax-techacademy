import React from 'react'
import "../assets/css/style.css"
import "../assets/css/smallScreen.css"
import { Link } from "react-router-dom";

const PrimaryButton = ({toWhere, text, func, marginLeft}) => {
  return ( 
   <div className='custombutton' style={{ marginLeft}}>
      <Link to={toWhere} onClick={func} className="btn"> {text} </Link>
   </div>
  )
}

export default PrimaryButton