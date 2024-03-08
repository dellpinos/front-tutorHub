import './../styles/HeroHome.css';
import { Link } from 'react-router-dom';
import BotonSlide from './BotonSlide';
import CampoBusquedaXL from './CampoBusquedaXL';

const HeroHome = () => {
    return (
        <div className='hero-home__contenedor'>
            <div className='hero-home__contenedor-header'>
                <Link to='/'>
                    <h1 className="hero-home__logo">TutorHub</h1>
                </Link>

                <nav className='hero-home__nav'>

                    <BotonSlide
                        ruta='#'
                        colortexto="var(--blanco)"
                        bgcolor="var(--verdeP)"
                    >Info</BotonSlide>
                    <BotonSlide
                        ruta='/login'
                        colortexto="var(--blanco)"
                        bgcolor="var(--verdeP)"
                    >Log In</BotonSlide>
                </nav>
            </div>


            <div className='hero-home__texto-contenedor'>
                <h2>¡Encuentra a tu Profe!</h2>
                <CampoBusquedaXL />
            </div>


        </div>
    )
}

export default HeroHome