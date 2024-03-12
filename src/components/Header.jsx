import './../assets/styles/Header.css';
import BotonSlide from './BotonSlide';
import CampoBusqueda from './CampoBusqueda';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';



const Header = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return ()=> {
            window.addEventListener('scroll', handleScroll);
        }

    }, []);

    const handleScroll = () => {
        if(window.scrollY > 600) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }

    return (
        <header className={`header__contenedor ${visible ? 'header__contenedor-mostrar' : 'header__contenedor-ocultar'}`}>
            <div className='header__contenedor-logo'>
                <Link to='/'>
                    <h1 className="header__logo"><span>Tutor</span>Hub</h1>
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