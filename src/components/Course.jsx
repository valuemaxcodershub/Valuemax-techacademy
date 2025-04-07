import React, { useState } from 'react'
import PrimaryButton from './PrimaryButton'
import { Link } from "react-router-dom";

const Course = ({course, images, index}) => {

   const [showFullDescription, setShowFullDescription] = useState(false)

   let description = course.description
   // console.log(description);

   if(!showFullDescription){
      description = description.substring(0, 120) + "..."
   }

  return (
      <div className='eachitem'>
         <div className='innerscroll'>
            <div className='forimg'>
               <img src={images[index]} alt="html-css" />
            </div>
            <h2>
               {course.title}
            </h2>
            <p id='showcontent'>
               {description}
            </p>
            <Link onClick={() => setShowFullDescription((prevState) => !prevState)} className='see'>
               {showFullDescription ? "See Less" : "See More"}
            </Link>
         </div>
         <PrimaryButton text={"Read More"} func={() => {}} toWhere={`/courses/${course.id}`}/>
      </div>
  )
}

export default Course