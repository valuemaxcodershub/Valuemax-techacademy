import React from 'react'
import "../assets/css/style.css"
import "../assets/css/smallScreen.css"
import pre from "../assets/images/pre.jpg"
import olayinka from "../assets/images/olayinka.jpg"
import ban from "../assets/images/ban.jpg"

const Testimonial = () => {
  return (
   // <testimonial
   <div class="serv sides testi" id="testimonial">
      <h1>What People say</h1>
      <p>
         Discover what our satisfied Students have to say <br/> 
         about their experience with our services.
      </p>
      <div class="test-box">
         <div class="test-each">
            <p>
               I am writing this testimony to express my utmost gratitude and satisfaction
               with the exceptional training experience I had at Valumax Coders' Hub to learn Data Science. It
               was an enriching journey that has profoundly impacted my professional growth and skills in the
               field of data science.
               The instructors demonstrated deep subject matter knowledge and were able to effectively convey
               complex concepts in a clear and concise manner.
               The curriculum was thoughtfully designed, covering a wide range of essential topics in data
               science. The combination of theoretical foundations and practical applications provided a better
               understanding. The hands-on exercises and projects allowed me to apply the concepts learned and
               develop the necessary skills to tackle real-world data challenges.
               Furthermore, the availability of modern tools and resources ensured a seamless learning
               experience.
               I am grateful for the opportunity to have been a part of the data science training program
               at VCH. The knowledge and skills I have acquired will undoubtedly be useful in my career.
               In conclusion, I highly recommend VCH to anyone seeking comprehensive and practical training in
               data science.
               Thank you for the invaluable experience that will have a lasting impact on my professional
               journey.
               Sincerely,                    
            </p>
            <div>
               <div class="test-img">
                  <img src={pre} alt=""/>
               </div>
               <h3>Amangele Oyintokoni Predebi</h3>
            </div>
         </div>
         <div class="test-each">
            <p>
               At ValueMax coders’ Hub (VCH), I found an accessible curriculum which the tutor
               expertly delivered over a relatively light schedule of classes. I enjoyed an excellent
               learning environment which fostered conversations between fellow students. The tasks I was given
               for class exercises and assignments strongly encouraged self-learning, which I have found
               invaluable ever since. The final projects in particular were crafted with each student’s
               individual strengths and weaknesses in mind, which convinced me that the tutors at VCH are not
               only skilled, but also mindful. I found the curriculum to be very
               focused on taking students from complete ignorance to industry accepted levels of productivity.
               In summary, my learning experience at ValueMax coders’ Hub was wholistic and helped me develop
               skills that I have found useful even outside of my training subject.                    
            </p>
            <div>
               <div class="test-img">
                  <img src={ban} alt=""/>
               </div>
               <h3>Tserga Barnabas</h3>
            </div>
         </div>
         <div class="test-each">
            <p>
               I strongly recommend Valuemax coders' Hub for any ICT or Tech based course.
               When I did my Foundation Computer Training for beginner at VCH, I never thought it was going to
               run smoothly like that. But the serene environment, well updated
               teachers and trainers really made my stay there a worthwhile venture.
               I learnt on paper and on my system,I enjoyed the way it was not just a paper and pencil class but
               majorly practical.
               The best part is the assignment and assessment at the end of the class to show that you really
               learnt something from the class. I still recommend Valuemax coders' Hub for anyone interested in ICT training, either programming
               or Non programming courses.                 
            </p>
            <div>
               <div class="test-img">
                  <img src={olayinka} alt=""/>
               </div>
               <h3>BABALOLA OLAYINKA</h3>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Testimonial