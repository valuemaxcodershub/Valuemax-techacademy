import React from 'react'
import "../assets/css/style.css"
import "../assets/css/smallScreen.css"
import { 
  
  FaFacebook, 
  FaWhatsapp, 
  FaTwitter, 
  FaInstagram
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='sides inner-footer'>

        {/* footer item 1 */}

        <div className='eachitem first-item'>
          <h1>
            Valuemax <span>TechAcademy</span>
          </h1>
          <p>
            Empowering Africa's Future through Cutting-Edge Technology
          </p>
          <h2>
            Stay updated
          </h2>
          <div className='foricons'>
            <a href="#"><FaFacebook/></a>
            <a href="#"><FaTwitter/></a>
            <a href="#"><FaInstagram/></a>
            <a href="#"><FaWhatsapp/></a>
          </div>
        </div>

        {/* footer item 2 */}

        <div className='eachitem'>
          <div className='item'>
            <h1>About Us </h1>
            <ul>
              <li><a href="#course">About Us</a></li>
              <li><a href="#course">Hosting & Domain</a></li>
              <li><a href="#course">Buy Data</a></li>
              <li><a href="#course">News</a></li>
              <li><a href="#course">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* footer item 3 */}

        <div className='eachitem'>
          <div className='item'>
            <h1>Programming</h1>
            <ul>
              <li><a href="#course">Front-End Web Dev</a></li>
              <li><a href="#course">Back-End Web Dev</a></li>
              <li><a href="#course">Python Programming</a></li>
              <li><a href="#course">Data Science & Machine Learning (M.L)</a></li>
              <li><a href="#course">Data Analysis</a></li>
              <li><a href="#course">Mobile App Dev</a></li>
              <li><a href="#course">Desktop Application</a></li>
              <li><a href="#course">Computer Networking</a></li>
              <li><a href="#course">DevOps/Cloud Computing</a></li>
              <li><a href="#course">Cyber Security</a></li>
              <li><a href="#course">Web 3: Blockchain Dev</a></li>
              <li><a href="#course">Artificial Intelligence (A.I), Robotic, <br /> Automation, IOT & Embedded system</a></li>
            </ul>
          </div>
        </div>

        {/* footer item 4 */}

        <div className='eachitem'>
          <div className='item'>
            <h1>Non-Programming</h1>
            <ul>
              <li><a href="#course">Foundation Computer Training</a></li>
              <li><a href="#course">Professional Graphics and 3D Designs</a></li>
              <li><a href="#course">Video Editing/ Motion Graphics, 3D Animation, and White Boarding</a></li>
              <li><a href="#course">UI/UX</a></li>
              <li><a href="#course">Auto card for Architectural Design</a></li>
              <li><a href="#course">Sage & other Accounting Software</a></li>
              <li><a href="#course">Artificial Intelligence apps/tools usage</a></li>
              <li><a href="#course">CMS Based Web Design</a></li>
              <li><a href="#course">Digital Marketing </a></li>
            </ul>
          </div>
        </div>

        {/* footer item 2 */}

        <div className='eachitem'>
          <div className='item'>
            <h1>Contact Us </h1>
            <p>
              30, Old Finbank Building: 
              Opp UI Post Office, 3rd Building after FCMB;
              UI Ojoo Road, Ibadan.
            </p>
            <p>
              Email: <a href="mailto:admin@valuemaxonline.com">admin@valuemaxonline.com</a>
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Footer