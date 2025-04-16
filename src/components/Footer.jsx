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
              <li><Link to="/courses">About Us</Link></li>
              <li><Link to="/courses">Hosting & Domain</Link></li>
              <li><Link to="/courses">Buy Data</Link></li>  
              <li><Link to="/courses">News</Link></li>
              <li><Link to="/courses">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* footer item 3 */}

        <div className='eachitem'>
          <div className='item'>
            <h1>Programming</h1>
            <ul>
              <li><Link to="/courses">Front-End Web Dev</Link></li>
              <li><Link to="/courses">Back-End Web Dev</Link></li>
              <li><Link to="/courses">Python Programming</Link></li>
              <li><Link to="/courses">Data Science & Machine Learning (M.L)</Link></li>
              <li><Link to="/courses">Data Analysis</Link></li>
              <li><Link to="/courses">Mobile App Dev</Link></li>
              <li><Link to="/courses">Desktop Application</Link></li>
              <li><Link to="/courses">Computer Networking</Link></li>
              <li><Link to="/courses">DevOps/Cloud Computing</Link></li>
              <li><Link to="/courses">Cyber Security</Link></li>
              <li><Link to="/courses">Web 3: Blockchain Dev</Link></li>
              <li><Link to="/courses">Artificial Intelligence (A.I), Robotic, <br /> Automation, IOT & Embedded system</Link></li>
            </ul>
          </div>
        </div>

        {/* footer item 4 */}

        <div className='eachitem'>
          <div className='item'>
            <h1>Non-Programming</h1>
            <ul>
              <li><Link to="/courses">Foundation Computer Training</Link></li>
              <li><Link to="/courses">Professional Graphics and 3D Designs</Link></li>
              <li><Link to="/courses">Video Editing/ Motion Graphics, 3D Animation, and White Boarding</Link></li>
              <li><Link to="/courses">UI/UX</Link></li>
              <li><Link to="/courses">Auto card for Architectural Design</Link></li>
              <li><Link to="/courses">Sage & other Accounting Software</Link></li>
              <li><Link to="/courses">Artificial Intelligence apps/tools usage</Link></li>
              <li><Link to="/courses">CMS Based Web Design</Link></li>
              <li><Link to="/courses">Digital Marketing </Link></li>
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