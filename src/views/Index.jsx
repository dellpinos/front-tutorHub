import '../assets/styles/Index.css';
import Post from '../components/Post';
import OpCard from '../components/OpCard';
import CategoriaIconos from '../components/CategoriaIconos';
import BotonSlide from '../components/BotonSlide';
import ListadoCategorias from '../components/ListadoCategorias';
import { obtenerPosts } from '../api/posts';
import { obtenerReviewsIndex } from '../api/reviews';
import { useLoaderData } from 'react-router-dom';



export async function loader() {

    const posts = await obtenerPosts();
    const reviews = await obtenerReviewsIndex();

    return [posts, reviews];
}

const Index = () => {

    const [posts, reviews] = useLoaderData();


    return (
        <div className="index__contenedor-principal">

            <CategoriaIconos />

            <section className='index__posts-contenedor'>
                <h2>Profesores Recientes</h2>

                <div className='index__posts-grid'>

                    {posts.map(post => (
                        <Post
                            post={post}
                            key={post.id}
                        />
                    ))}
                </div>
            </section>

            <section className='index__opCards-contenedor'>

                {reviews.map(rev => (
                    <OpCard
                        review={rev}
                        key={rev.id}
                    />

                ))}

            </section>

            <section className='index__nuevo-profe-contenedor'>
                <div className='index__nuevo-profe-img'>


                    <div className='index__nuevo-profe-texto'>
                        <h3>Tu también puedes ser profesor</h3>
                        <p>Vive de lo que te gusta compartiendo tus conocimientos</p>
                        <div className='index__nuevo-profe-btn'>

                            <BotonSlide
                                ruta='/dar-clases'
                                colortexto="var(--blanco)"
                                bgcolor="var(--naranjaP)"
                            >Dar Clases</BotonSlide>
                        </div>

                    </div>
                </div>
            </section>

            <section>

                <ListadoCategorias />
            </section>



        </div>
    )
}

export default Index