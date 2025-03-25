import React from 'react'
import "../assets/css/style.css"
import "../assets/css/smallScreen.css"
import htmlcss from "../assets/images/html-css.webp"
import jscourse from "../assets/images/modernjs.webp"

const Testimonial = () => {
  return (
   // <testimonial
   <div class="serv sides testi" id="testimonial">
      <h1>What People say</h1>
      <p>
         Discover what our satisfied Students have to say <br/> 
         about their experience with our services.
      </p>
      <div class="test-box">
         <div class="test-each">
            <p>
               I thought I had lost my crypto forever after falling for a scam, but 
               this team worked tirelessly to trace and recover my funds. Their 
               professionalism and dedication were beyond my expectations. Highly 
               recommended!
            </p>
            <div>
               <div class="test-img">
                  <img src={htmlcss} alt=""/>
               </div>
               <h3>David M.</h3>
            </div>
         </div>
         <div class="test-each">
            <p>
               After being locked out of my wallet for months, I was skeptical about 
               ever regaining access. Thankfully, they guided me through every step 
               and successfully recovered my assets. I’m beyond grateful!
            </p>
            <div>
               <div class="test-img">
                  <img src={jscourse} alt=""/>
               </div>
               <h3>Mary K.</h3>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Testimonial