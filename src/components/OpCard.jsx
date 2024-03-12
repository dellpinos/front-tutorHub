import './../assets/styles/OpCard.css';
import imgRev from './../../storage/profe01.jpg';

const OpCard = (review) => {

    console.log(review);
    return (
        <div className="opCard__contenedor">
            <div className='opCard__nombre-contenedor'>
                <img src={imgRev} alt="Imagen Review" className='opCard__img' />
                <div>
                    <h4 className="opCard__nombre">José Nombre</h4>
                    <p className="opCard__categoria">Entrenador Personal</p>
                </div>

            </div>
            <p className="opCard__review">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae temporibus rem quaerat porro veritatis sapiente, ducimus atque quis animi eius maxime.</p>

            <p className="opCard__puntaje">
                5 X X X X X
            </p>
        </div>
    )
}

export default OpCard