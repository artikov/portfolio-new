import React from 'react'
import {FaLinkedin, FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa'
import './Contacts.css'

const Contacts = () => {
  return (
    <div id='contact' className='container manrope-regular'>
        <div className='contact-left'>
            <div className='contact-top'>
                <div className='contact-text'>
                    <h3 className='bebas-neue-regular'>Let's connect</h3>
                    <p>
                        Say hello at <a href="mailto:artikov.dev@gmail.com">artikov.dev@gmail.com</a>
                    </p>
                    <p>
                        For more info, here's my <a href="https://google.drive">resume</a>
                    </p>
                </div>
                <div className='contact-icons'>
                    <FaGithub />
                    <FaLinkedin />
                    <FaTwitter />
                    <FaInstagram />
                </div>
            </div>
            <div className='contact-copy'>
                <p>&copy; 2025 Oybek Artikov</p>
            </div>
        </div>
        <div className='contact-right'>
            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" name='name' />
                <label htmlFor="email">Email</label>
                <input type="text" name='email' />
                <label htmlFor="subject">Subject</label>
                <input type="text" name='subject' />
                <label htmlFor="message">Message</label>
                <textarea type="text" name='message' />
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contacts