import React from 'react'
import "../assets/css/style.css"
import "../assets/css/smallScreen.css"
import { Link } from "react-router-dom";
import courses from '../course.json'
import htmlcss from "../assets/images/html-css.webp"
import jscourse from "../assets/images/modernjs.webp"
import backend from "../assets/images/backend.png"
import mobileapp from "../assets/images/mobile-app.jpg"
import python from "../assets/images/python.png"
import pythonMl from "../assets/images/python-ml.png"
import ai from "../assets/images/ai.png"
import devops from "../assets/images/devops.jpg"
import uiux from "../assets/images/uiux.png"
import cms from "../assets/images/cms.webp"
import dataAnal from "../assets/images/dataAnal.jpg"
import graphics from "../assets/images/graphics.jpg"
import digi from "../assets/images/digi.jpg"
import seo from "../assets/images/seo.png"
import sem from "../assets/images/sem.webp"
import email from "../assets/images/email.png"
import market from "../assets/images/market.jpg"
import basic from "../assets/images/basic.webp"
import { useState, useEffect } from 'react';
import PrimaryButton from './PrimaryButton';
import Course from './Course';
import SecondaryButton from './SecondaryButton';
import CallToAction from './CallToAction';
import SearchBar from './SearchBar';

const Courses = ({isHome = false}) => {
   const images = [
      htmlcss, 
      jscourse, 
      backend, 
      mobileapp, 
      python, 
      pythonMl, 
      ai, 
      devops, 
      uiux, 
      cms,
      dataAnal,
      graphics,
      digi,
      seo,
      sem,
      email,
      market,
      basic
   ]
   let courseListing = isHome ? courses.slice(0, 4) : courses

   // this is to set course bases on search
   const [filteredCourses, setFilteredCourses] = useState(courseListing);

   // this handles search 
   
   const handleSearch = (searchTerm) => {
      if (!searchTerm) {
        setFilteredCourses(courseListing);
      } else {
        const filtered = courseListing.filter(
          (course) =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCourses(filtered);
      }
    };

   console.log(courseListing);
   console.log(filteredCourses);

   

   return (
      <>
         <div className='sides'>
            {!isHome && 
               <div></div>
            }
            <div className='courseSection'>
               <h1>{isHome ? "Featured Courses" : "All Courses"}</h1>
               <SearchBar onSearch={handleSearch}/>
               <div className='inner'>
                  {filteredCourses.map((course, index) => (                  
                     <Course course={course} key={course.id} index={index} images={images}/>
                  ))}
               </div>
            </div>
         </div>
         {!isHome && <CallToAction/> }
      </>
   )
}

export default Courses