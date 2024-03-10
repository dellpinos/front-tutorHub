
export async function obtenerPosts() {

    const url = import.meta.env.VITE_API_URL_POSTS;

    const resultado = await fetch(url);
    const respuesta = await resultado.json();

    return respuesta;

}