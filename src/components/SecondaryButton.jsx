import React from 'react'
import "../assets/css/style.css"
import "../assets/css/smallScreen.css"
import { Link } from "react-router-dom";

const SecondaryButton = ({toWhere, text, func, marginLeft}) => {
  return (
   <div className='custombutton2' style={{ marginLeft}}>
      <Link to={toWhere} onClick={func} className="btn"> {text} </Link>
   </div>
  )
}

export default SecondaryButton