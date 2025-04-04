import React from 'react'
import Hero from '../components/Hero'
import Courses from '../components/Courses'
import SecondaryButton from '../components/SecondaryButton'
import Testimonial from '../components/Testimonial'

const Training = () => {
  return (
    <>
      <Hero/>
      <Courses isHome={true}/>
      <SecondaryButton toWhere={"/courses"} text={"View All Courses"} />
      <Testimonial/>
    </>
  )
}

export default Training