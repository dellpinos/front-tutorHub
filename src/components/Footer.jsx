import '../assets/styles/Footer.css';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="footer">
            <div className="footer__grid">
                <div className="footer__listado">
                    <h4>Contacto</h4>
                    <p>dellpinos7@gmail.com</p>

                </div>
                <div className="footer__listado">
                    <h4>Categorias</h4>
                    <a href='#'>Categoria 01</a>
                    <a href='#'>Categoria 02</a>
                    <a href='#'>Categoria 03</a>
                    <a href='#'>Categoria 04</a>
                    <a href='#'>Categoria 05</a>
                    <a href='#'>Categoria 06</a>
                </div>
                <div className="footer__listado">
                    <h4>Nosotros</h4>
                    <a href='#'>Acerca de nosotros</a>
                    <a href='#'>Mi Portfolio</a>
                </div>
            </div>
            <p className='footer__copyright'>Martín del Pino - <span>{year}</span></p>
        </footer>
    )
}

export default Footer