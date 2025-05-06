import React from 'react'
import Hero from '../components/Hero'
import Courses from '../components/Courses'
import SecondaryButton from '../components/SecondaryButton'
import Testimonial from '../components/Testimonial'
import CallToAction from '../components/CallToAction'

const Training = () => {
  return (
    <>
      <Hero/>
      <Courses isHome={true}/>
      <SecondaryButton toWhere={"/courses"} text={"View All Courses"} />
      <Testimonial/>
      <CallToAction/>
    </>
  )
}

export default Training