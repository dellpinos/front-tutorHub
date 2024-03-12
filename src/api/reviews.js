
export async function obtenerReviewsIndex() {

    const url = import.meta.env.VITE_API_URL_REVIEWS_INDEX;

    const resultado = await fetch(url);
    const respuesta = await resultado.json();

    return respuesta;

}