import './../styles/header.css';
import BotonSlide from './BotonSlide';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className="header__contenedor">
            <Link to='/'>
                <h1 className="header__nombre">TutorHub</h1>
            </Link>
            <nav className="header__nav">
                <BotonSlide to='/dar-clases'>Dar Clases</BotonSlide>
                <BotonSlide to='/login'>Login</BotonSlide>
                <BotonSlide to='/register'>Register</BotonSlide>

            </nav>
        </header>
    )
}

export default Header