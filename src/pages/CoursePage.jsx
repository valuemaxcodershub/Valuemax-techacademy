import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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

const CoursePage = () => {
   const {id} = useParams()
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
  //  console.log(id);

   const [course, setCourse] = useState(null)
   
   
   // console.log(course);

  return (
    <div>
      <h1>Course Page</h1>
      <h1>Course Page</h1>
      <h1>Courcse Page</h1>
      <h1>Course Page</h1>
      <h1>asdiasj</h1>
      <h1>{id}</h1>
    </div>
  )
}

export default CoursePage