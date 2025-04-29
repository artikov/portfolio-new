import React from 'react'
import './About.css'
import Buttons from '../Buttons/Buttons'

const About = ({ setAboutPage, aboutPage }) => {
  return (
    <div id='about' className='container'>
      <div className='about-left bebas-neue-regular'>
        <h2>About me</h2>
      </div>
      <div className='about-right manrope-regular'>
        <h3>I am a front-end developer based in Tashkent. Has Business Information Systems background.</h3>
        <p>I am a front-end developer based in Tashkent looking for exciting opportunities. Has Business Information Systems background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</p>
        {aboutPage ?
          <Buttons aboutPage={aboutPage} />
          :
          <a href="#" onClick={() => setAboutPage(true)}>More About Me</a>
        }

      </div>
    </div>
  )
}

export default About