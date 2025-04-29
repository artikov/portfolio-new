import './Navbar.css'

const Navbar = ({ setAboutPage }) => {
  return (
    <div className='nav-container container'>
      <div className='nav-left bebas-neue-regular'>
        <a href="#" onClick={() => setAboutPage(false)}>
          Oybek Artikov
        </a>
      </div>
      <div className='nav-right inter-regular'>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar