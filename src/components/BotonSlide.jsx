import { Link } from "react-router-dom";
import styled from '@emotion/styled';


const BotonSlide = styled(Link)`

        color: var(--blanco);
        border: 3px solid var(--rojoP);
        padding: .5rem 1rem;
        border-radius: 10rem;
        background: linear-gradient(70deg, var(--blanco) 50%, var(--rojoP) 50%);
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
        background: linear-gradient(70deg, var(--rojoP) 50%, transparent 50%);
        border-radius: 10rem;
        z-index: -1;
        background-size: 300%;
        background-position: 100%;
        transition: 1s;
    }

    ::after:hover {
        background-position: 0;
        color: var(--rojoP);
    }

    :hover {
        cursor: pointer;
        background-position: 0;
        color: var(--rojoP);
    }

`;


export default BotonSlide