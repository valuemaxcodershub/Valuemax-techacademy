import React from 'react'
import "../assets/css/style.css"
import "../assets/css/smallScreen.css"
import {Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='hero-box'>
      <div className='sides'>
         <div className='intro'>            
            {/* <h1>
               Welcome to Valuemax TechAcademy
            </h1> */}
            <h1>
               Master Tech Skills for the Future!
            </h1>
            <p>Empowering Africa's Future through Cutting-Edge Technology</p>
            <div className='cta'>
               <Link to="/">Explore Courses</Link>
               <Link to="/">Get Started for Free</Link>
            </div>
         </div>
         <div className='cert'>
            <div>
               <h2>
                  Verify Past Students' Certificates  
               </h2>
               <form action="">
                  <input type="text" placeholder='Verify past students'/>
                  <button type='submit'>Verify</button>
               </form>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Hero