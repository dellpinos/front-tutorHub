import './../styles/Header.css';
import BotonSlide from './BotonSlide';
import CampoBusqueda from './CampoBusqueda';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className="header__contenedor">
            <div className='header__contenedor-logo'>
                <Link to='/'>
                    <h1 className="header__logo">TutorHub</h1>
                </Link>

                <CampoBusqueda />

            </div>
            <nav className="header__nav">
                <BotonSlide
                    ruta='/dar-clases'
                    colortexto="var(--blanco)"
                    bgcolor="var(--verdeP)"
                >Dar Clases</BotonSlide>

                <BotonSlide
                    ruta='/login'
                    colortexto="var(--blanco)"
                    bgcolor="var(--azulP)"
                >Log In</BotonSlide>

                <BotonSlide
                    ruta='/register'
                    colortexto="var(--blanco)"
                    bgcolor="var(--rojoP)"
                >Sign Up</BotonSlide>


            </nav>
        </header>
    )
}

export default Header