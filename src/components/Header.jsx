import React, { useState } from 'react'
import "../assets/css/style.css"
import "../assets/css/smallScreen.css"
import { Link } from "react-router-dom";
import logo from "../assets/images/logo44.png"
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
   const [isMobile, setIsMobile] = useState(false)

  return (
      <div className='headerSection'>
         <div className='header sides'>
            <div className='forimg'>
               <img src={logo} />
            </div>
            <div className='forcollapse'>
               <button className='collapseBut' onClick={() => {setIsMobile(!isMobile)}}>
                  {isMobile ? <FaTimes/> : <FaBars/>}
               </button>
            </div>
            <ul className={isMobile ? 'nav-items-mobile' : 'nav-items'} onClick={()=> setIsMobile(false)}>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/about">About</Link>
               </li>
               <li>
                  <Link to="/courses">Courses</Link>
               </li>
               <li>
                  <Link to="/login">Login</Link>
               </li>
               <li>
                  <Link to="/admin">Admin</Link>
               </li>
            </ul>
         </div>
      </div>
  )
}

export default Header
