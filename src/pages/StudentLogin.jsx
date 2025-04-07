import React, { useState } from 'react'
import logo from "../assets/images/logo44.png"
import { Link, useNavigate } from "react-router-dom";
import { IoIosPerson } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa6";



const StudentLogin = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [formData, setFormData] = useState({
      username: '', 
      password : ''
   })
   const[errors, setErrors] = useState({})

   const handleChange = (e) =>{
      const {id, value} = e.target
      setFormData({
         ...formData,
         [id] : value
      })
   }

   const validate = () => {
      let tempErrors = {};
      if (!formData.username) {
        tempErrors.username = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.username)) {
        tempErrors.username = 'Email is invalid';
      }
  
      if (!formData.password) {
        tempErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        tempErrors.password = 'Password must be at least 8 characters';
      }
  
      setErrors(tempErrors);
      return Object.keys(tempErrors).length === 0;
   };

   
   const handleSubmit = (e) => {
      e.preventDefault()
      if(validate()){
         console.log('form errors', errors);
         console.log('form subitted', formData);
      }
   }

  return (
    <div className='studentlog'>
      <div className='studenthead'>
         <div className='sides'>
            <Link to='/'>
               <img src={logo} alt="site-logo" />
            </Link>
         </div>
      </div>
      <div className='formsec'>
         <h2>Student Login</h2>
         <form onSubmit={handleSubmit} >
            <label htmlFor="username">Username / Email Address</label>
            <div className='inp'>
               <input 
               type="text" 
               id='username' 
               placeholder='chidi@gmail.com'
               value={formData.username}
               onChange={handleChange}
            />
               <IoIosPerson size={30}/>
            </div>
            {/* username error */}
            {errors &&  <span className='errormess'>{errors.username}</span> }
            <label htmlFor="password">Password </label>
            <div className='inp'>
               <input 
               type={showPassword ? 'text' :'password'} 
               id='password' 
               placeholder='input your password'
               value={formData.password}
               onChange={handleChange}
               />
               <div onClick={() => {setShowPassword(!showPassword)}}>          
                  {showPassword ? <FaEyeSlash/> : <FaEye />}
               </div>
            </div>
            {/* password error */}
            {errors &&  <span className='errormess'>{errors.password}</span> }
            <div className='forget'>
               <Link>Forgotten password?</Link>
            </div>
            <button type='submit'>Login</button>
         </form>
         <p>
            Don't have an account <Link to='/register'>Register</Link>
         </p>
      </div>
      <div className='logfooter'>
         copyright &copy; 2025
      </div>
    </div>
  )
}

export default StudentLogin