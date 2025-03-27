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
   console.log(courseListing);
   // const [courseListing, setCourseListing] = useState([]);

   // useEffect(() => {
   //    const fetchCourses =  async () => {
   //       const apiUrl = isHome ? "/api/courses?_limit=4" : "/api/courses"
   //       try {
   //          const res = await fetch(apiUrl);
   //          const data = await res.json();
   //          setCourseListing(data);
   //       } catch (error) {
   //          console.log("Error Fetching Data", error);
   //       }
   //    }
   //    fetchCourses()
   // }, [])
   // console.log(courseListing);


   return (
      <div className='sides'>
         <div className='courseSection'>
            <h1>{isHome ? "Featured Courses" : "All Courses"}</h1>
            <div className='inner'>
               {courseListing.map((course, index) => (                  
                  <Course course={course} key={course.id} index={index} images={images}/>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Courses