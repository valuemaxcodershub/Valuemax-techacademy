import React, { useState } from 'react'
import "../assets/css/style.css"
import "../assets/css/smallScreen.css"
import { Link } from "react-router-dom";
import logo from "../assets/images/logo44.png"
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";"use client";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const Header = () => {
   const [isMobile, setIsMobile] = useState(false)
   const [dropDown, setdropDown] = useState(false)
   const [openModal, setOpenModal] = useState(false);
   

  return (
      <div className='headerSection'>
         <div className='header sides'>
            <div className='forimg'>
               <img src={logo} />
            </div>
            <div className='forcollapse'>
               <button className='collapseBut' onClick={() => {setIsMobile(!isMobile)}}>
                  {isMobile ? <FaTimes/> : <FaBars/>}
               </button>
            </div>
            <ul className={isMobile ? 'nav-items-mobile' : 'nav-items'} >
            {/* <ul className='nav-items-mobile'> */}
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/about">About</Link>
               </li>
               <li>
                  <Link to="/courses">Courses</Link>
               </li>
               <li>
                  <Link onClick={() => {
                     setOpenModal(!openModal)
                     setIsMobile(!isMobile)
                  }}>Certificate</Link>
               </li>
               <li className='dropdown' onClick={() => {setdropDown(!dropDown); setIsMobile(true)}}>
                  <Link>Login {dropDown ? <IoIosArrowUp className='icon'/> : <IoIosArrowDown className='icon'/>}</Link>
                  <ul className={dropDown ? 'opened': 'closed'}>
                     <li>
                        <Link to='/student-login'>Student</Link>
                     </li>
                     <li>
                        <Link to='/admin-login'>Admin</Link>
                     </li>
                  </ul>
               </li>
               <li>
                  <Link to="/register" className='text-black'>Register</Link>
               </li>
            </ul>

         </div>
      

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} className='modal'>
        <ModalHeader className='font-semibold'>Verify Past Students' Certificates  </ModalHeader>
        <ModalBody>
         <form action="">
            <input type="text" placeholder='Verify past students'/>
            <button type='submit'>Verify</button>
         </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpenModal(false)}>Close</Button>
        </ModalFooter>
      </Modal>

   
   </div>   
  )
}

export default Header
