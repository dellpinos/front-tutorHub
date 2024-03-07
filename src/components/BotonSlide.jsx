import { Link } from "react-router-dom";
import styled from '@emotion/styled';


const Boton = styled(Link)`

        color: ${props => props.colortexto || 'var(--blanco)'};
        border: 3px solid ${props => props.bgcolor || 'var(--rojoP)'};
        padding: .5rem 1rem;
        border-radius: 10rem;
        background: linear-gradient(70deg, ${props => props.colortexto || 'var(--blanco)'} 50%, ${props => props.bgcolor || 'var(--rojoP)'} 50%);
        background-size: 300%;
        background-position: 100%;
        transition: 1s;

        ::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(70deg, ${props => props.bgcolor || 'var(--rojoP)'} 50%, transparent 50%);
        border-radius: 10rem;
        z-index: -1;
        background-size: 300%;
        background-position: 100%;
        transition: 1s;
    }

    ::after:hover {
        background-position: 0;
        color: ${props => props.bgcolor || 'var(--rojoP)'};
    }

    :hover {
        cursor: pointer;
        background-position: 0;
        color: ${props => props.bgcolor || 'var(--rojoP)'};
    }

`;


const BotonSlide = ({ bgcolor, colortexto, children, ruta }) => {
    return (
        <Boton
            to={ruta}
            colortexto={colortexto}
            bgcolor={bgcolor}
        >{children}</Boton>
    )
}

export default BotonSlide

