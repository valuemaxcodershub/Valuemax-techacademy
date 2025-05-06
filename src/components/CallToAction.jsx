import React from 'react'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className='calltoaction'>
      <div className='sides'>
         <div className='action-box'>
            <h1>
               Looking for a world class development agency?
            </h1>
            <p>
               At Valuemax-Tech Academy we have talented and experienced team of instructors
               ready to help you.
            </p>
            <div className='callbutton'>
               <Link to='/register' className='btn'>Get Started</Link>
            </div>
         </div>
         
      </div>
    </div>
  )
}

export default CallToAction