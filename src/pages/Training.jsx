import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Courses from '../components/Courses'
import SecondaryButton from '../components/SecondaryButton'
import Testimonial from '../components/Testimonial'

const Training = () => {
  return (
    <>
      {/* <Header/>
      <Footer/> */}
      <Hero/>
      <Courses isHome={true}/>
      <SecondaryButton toWhere={"/courses"} text={"View All Courses"} />
      <Testimonial/>
    </>
  )
}

export default Training