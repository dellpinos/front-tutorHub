

// Deberia ser un endpoint que retorne los 6 profesores vistos recientemente, son los primeros que se muestran en el index
export async function obtenerPosts() {

    const url = import.meta.env.VITE_API_URL_POSTS;

    const resultado = await fetch(url);
    const respuesta = await resultado.json();

    return respuesta;

}