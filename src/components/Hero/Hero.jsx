import Buttons from '../Buttons/Buttons';
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero-container container'>
            <div className='hero-left'>
                <div className='hero-text'>
                    <h1 className='bebas-neue-regular'>
                        Hi, I am <br />
                        Oybek Artikov
                    </h1>
                    <p className='manrope-regular'>A Tashkent based front-end developer passionate about building accessible and user friendly websites.</p>
                </div>
                <Buttons />
            </div>
            <div className='hero-right'>
                <img src="https://picsum.photos/500/600" alt="" />
            </div>
        </div>
    )
}

export default Hero