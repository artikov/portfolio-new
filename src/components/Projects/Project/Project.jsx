import React from 'react'
import './Project.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Project = ({ data }) => {

  return (
    <div className='project'>
      <div className='project-left'>
        <img src={data.project_image} alt="" />
      </div>
      <div className='project-right'>
        <h3 className='manrope-regular'>{data.project_title}</h3>
        <p className='manrope-regular'>{data.project_description}</p>
        <h4 className='manrope-regular'>Project Info</h4>
        <div className='project-info-detail manrope-regular'>
          <p>Year</p>
          <p>
            {data.project_info.project_year}
          </p>
        </div>
        <div className='project-info-detail manrope-regular'>
          <p>Role</p>
          <p>
            {data.project_info.project_role}
          </p>
        </div>
        <div className='project-links manrope-regular'>
          <div className='project-link'>
            <a href={data.project_links.live}>Live Demo</a>
            <FaExternalLinkAlt />
          </div>
          <div className='project-link'>
            <a href={data.project_links.github}>Github</a>
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project