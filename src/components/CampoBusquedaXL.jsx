import './../styles/CampoBusqueda.css';
import styled from '@emotion/styled';
import lupaImg from './../assets/img/lupa-buscador.svg';


const CampoBusqueda = () => {

    return (
        <div className='busquedaXL__contenedor'>
            <img src={lupaImg} alt="Imagen Lupa" className='busqueda__img'/>
            <input type="text" placeholder='Buscar' className='busquedaXL__campo'/>
        </div>
    )
}

export default CampoBusqueda