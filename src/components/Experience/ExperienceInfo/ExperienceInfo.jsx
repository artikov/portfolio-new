
const ExperienceInfo = ({ date, role, company, description }) => {
    return (
        <div>
            <div className='info-title-container'>
                <h3>{role}</h3>
                <p>{date}</p>
            </div>
            <p className='info-company'>{company}</p>
            <p>{description}</p>
        </div>
    )
}

export default ExperienceInfo