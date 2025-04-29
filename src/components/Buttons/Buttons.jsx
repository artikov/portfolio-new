import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Buttons = ({ aboutPage }) => {
    return (
        <div className='hero-buttons'>
            <button className='manrope-regular'>
                <span>
                    {aboutPage ? "Download Resume" : "Contact me"}
                </span>
                <span className='hero-dot'>•</span>
            </button>
            <a>
                <FaLinkedinIn />
            </a>
            <a>
                <FaGithub />
            </a>
        </div>
    )
}

export default Buttons