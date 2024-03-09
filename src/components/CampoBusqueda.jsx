import './../assets/styles/CampoBusqueda.css';
import styled from '@emotion/styled';
import lupaImg from './../assets/img/lupa-buscador.svg';


const CampoBusqueda = () => {

    return (
        <div className='busqueda__contenedor'>
            <img src={lupaImg} alt="Imagen Lupa" className='busqueda__img'/>
            <input type="text" placeholder='Buscar' className='busqueda__campo'/>
        </div>
    )
}

export default CampoBusqueda