import './Experience.css'
import { experience } from '../../experience'
import ExperienceInfo from './ExperienceInfo/ExperienceInfo'

const Experience = () => {
  return (
    <div id='experience' className='container'>
      <div className='exp-left'>
        <h2 className='bebas-neue-regular'>My Experience</h2>
      </div>
      <div className='exp-right manrope-regular'>
        {experience.map(exp => (
          <ExperienceInfo
            key={exp.id}
            date={exp.job_date}
            company={exp.company}
            role={exp.job_role}
            description={exp.job_description}
          />
        ))}
      </div>
    </div>
  )
}

export default Experience