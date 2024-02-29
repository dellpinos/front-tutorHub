
const Formulario = () => {
  return (
    <>
        <label className="formulario__label">Nombre</label>
        <input className="formulario__campo" type="text" placeholder="Ingresa tu nombre" />

        <label>Apellido</label>
        <input type="text" placeholder="Ingresa tu nombre" />

        <label>Email</label>
        <input type="email" placeholder="Ingresa tu Email" />

        <label>Teléfono</label>
        <input type="text" placeholder="Ingresa tu teléfono" />

        <label>Password</label>
        <input type="password" placeholder="Ingresa tu password" />

        <label>Repetir Password</label>
        <input type="password" placeholder="Repetir password" />

    </>
  )
}

export default Formulario