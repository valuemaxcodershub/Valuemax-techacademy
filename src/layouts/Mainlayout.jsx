import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../components/header';
import Footer from '../components/Footer';


const Mainlayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Mainlayout