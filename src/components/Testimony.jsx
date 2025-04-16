import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";

const Testimony = ({testimony, images, index }) => {
   const [showFullTestimony, setShowFullTestimony] = useState(false)
   let fullTestimony = testimony.testimony

   // console.log(fullTestimony);

   if (!showFullTestimony) {
      fullTestimony = fullTestimony.slice(0, 200) + '...'
   }

   const handleToggle = () => {
      setShowFullTestimony((prevState) => !prevState)
   }

  return (
      <div className='test-each'>
         <p>
            {fullTestimony} <br />
            <Link onClick={handleToggle}>
               {showFullTestimony ? 'See Less' : 'See More'}
            </Link>
         </p>
         <div>
            <div class="test-img">
               <img src={images[index]} alt=""/>
            </div>
            <h3>{testimony.testifier}</h3>
         </div>
      </div>
  )
}

export default Testimony