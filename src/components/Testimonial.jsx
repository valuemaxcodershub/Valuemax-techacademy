import React, { useEffect, useState } from 'react'
import "../assets/css/style.css"
import "../assets/css/smallScreen.css"
import pre from "../assets/images/pre.jpg"
import olayinka from "../assets/images/olayinka.jpg"
import ban from "../assets/images/ban.jpg"
import testimonies from '../testimonies.json'
import Testimony from './Testimony'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";


const Testimonial = () => {
   const testiImages = [pre, ban, olayinka]
   const testimonyListing = testimonies

  const [current, setCurrent] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); 

   useEffect(() => {
      const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setCardsToShow(1);
      else setCardsToShow(3);                      
      };
      handleResize(); 
      window.addEventListener('resize', handleResize); 
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const prevSlide = () => {
      setCurrent((prev) =>
      prev === 0 ? testimonyListing.length - cardsToShow : prev - 1
      );
   };

   const nextSlide = () => {
      setCurrent((prev) =>
      prev + cardsToShow >= testimonyListing.length ? 0 : prev + 1
      );
   };

   const visibleTestimonials = testimonyListing.slice(current, current + cardsToShow);


  return (
   // <testimonial
   <div class="serv sides testi" id="testimonial">
      <h1>What People say</h1>
      <p>
         Discover what our satisfied Students have to say <br/> 
         about their experience with our services.
      </p>
      <div className='carousel'>
         <button onClick={prevSlide}><FaArrowLeft className='ca-icon' size={'30'}/></button>
         <div class="test-box">
            {visibleTestimonials.map((testimony, index) => (
               <Testimony testimony={testimony} images={testiImages} key={testimony.id} index={index}/>
            ))}
         </div>
         <button onClick={nextSlide}> <FaArrowRight className='ca-icon' size={'30'}/> </button>
      </div>
   </div>
  )
}

export default Testimonial