import React from 'react'
import "../assets/css/style.css"
import "../assets/css/smallScreen.css"
import { 
  
  FaFacebook, 
  FaWhatsapp, 
  FaTwitter, 
  FaInstagram
} from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <Link to="/"><FaFacebook/></Link>
            <Link to="/"><FaTwitter/></Link>
            <Link to="/"><FaInstagram/></Link>
            <Link to="/"><FaWhatsapp/></Link>
          </div>
        </div>

        {/* footer item 2 */}

        <div className='eachitem'>
          <div className='item'>
            <h1>About Us </h1>
            <ul>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Hosting & Domain</Link></li>
              <li><Link to="/">Buy Data</Link></li>  
              <li><Link to="/">News</Link></li>
              <li><Link to="/">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* footer item 3 */}

        <div className='eachitem'>
          <div className='item'>
            <h1>Programming</h1>
            <ul>
              <li><Link to="/courses/1">Front-End Web Dev</Link></li>
              <li><Link to="/courses/2">Front-End Web - JS</Link></li>
              <li><Link to="/courses/3">Back-End Web Dev</Link></li>
              <li><Link to="/courses/5">Python Programming</Link></li>
              <li><Link to="/courses/6">Data Science & Machine Learning (M.L)</Link></li>
              <li><Link to="/courses/11">Data Analysis</Link></li>
              <li><Link to="/courses/4">Mobile App Dev</Link></li>
              <li><Link to="/courses">Desktop Application</Link></li>
              <li><Link to="/courses">Computer Networking</Link></li>
              <li><Link to="/courses/8">DevOps/Cloud Computing</Link></li>
              <li><Link to="/courses">Cyber Security</Link></li>
              <li><Link to="/courses">Web 3: Blockchain Dev</Link></li>
              <li><Link to="/courses/7">Artificial Intelligence (A.I), Robotic, <br /> Automation, IOT & Embedded system</Link></li>
            </ul>
          </div>
        </div>

        {/* footer item 4 */}

        <div className='eachitem'>
          <div className='item'>
            <h1>Non-Programming</h1>
            <ul>
              <li><Link to="/courses/18">Foundation Computer Training</Link></li>
              <li><Link to="/courses/12">Professional Graphics and 3D Designs</Link></li>
              <li><Link to="/courses">Video Editing/ Motion Graphics, 3D Animation, and White Boarding</Link></li>
              <li><Link to="/courses/9">UI/UX</Link></li>
              <li><Link to="/courses">Auto card for Architectural Design</Link></li>
              <li><Link to="/courses">Sage & other Accounting Software</Link></li>
              <li><Link to="/courses">Artificial Intelligence apps/tools usage</Link></li>
              <li><Link to="/courses/10">CMS Based Web Design</Link></li>
              <li><Link to="/courses/13">Digital Marketing </Link></li>
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
              Email: <Link  to="mailto:admin@valuemaxonline.com">admin@valuemaxonline.com</Link>
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Footer