import React, { useState } from 'react'
import logo from "../assets/images/logo44.png"
import { Link, useNavigate } from "react-router-dom";
import { IoIosPerson } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

/**
 * AdminLogin Component
 * 
 * This component renders the login interface for admin users.
 * It includes validation, password visibility toggling, and navigation on successful login.
 * 
 * Features:
 * - Email and password input fields
 * - Form validation with error messaging
 * - Toggle to show/hide password
 * - Navigation to admin dashboard upon valid submission
 * - Basic styling structure with custom icons and layout
 * 
 * State Variables:
 * - showPassword: boolean — toggles visibility of password field
 * - formData: object — holds input values for username and password
 * - errors: object — stores form validation error messages
 * 
 * Functions:
 * - handleChange(): Updates form input state
 * - validate(): Validates inputs (email format and password length)
 * - handleSubmit(): Validates and navigates on success
 * 
 * Notes:
 * - Uses React Router's `useNavigate` for redirecting after login
 * - Placeholder navigation to `/admin` — replace with real auth flow
 * - Error styling assumes a `.errormess` class is defined in CSS
 */


const AdminLogin = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const[errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {id, value} = e.target
    setFormData({
      ...formData,
      [id]: value
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
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(validate()) {
      console.log('form errors', errors);
      console.log('form subitted', formData);
      navigate('/admin')
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
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
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
            {/* username errors */}
            {errors &&  <span className='errormess'>{errors.username}</span> }
            <label htmlFor="password">Password</label>
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
      </div>
      <div className='logfooter'>
        copyright &copy; 2025
      </div>
    </div>
  )
}

export default AdminLogin