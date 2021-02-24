import React, {Fragment,useState} from "react";

const Formulario = () => {

    //Crear state de citas

const [cita,guardarCita] = useState({
    mascota:'',
    propietario:'',
    fecha:'',
    hora:'',
    sintomas:''
});

//Funcion que se ejecuta cuando el usuario escribe en un input

const actualizarState = e => {
    guardarCita({
        ...cita,
        [e.target.name]:e.target.value
    });
}

//Extraer los valores

const {mascota,propietario,fecha,hora,sintomas} = cita;

//Cuando el usuario presiona agregar cita
const submitCita = e => {
    e.preventDefault();

    //Validar cita
    if(mascota.trim() === '' || propietario.trim() ==='' || fecha.trim()==='' || hora.trim()==='' || sintomas.trim() === ''){
       console.log('Hay un error');
       return;
    }

    console.log('agregado');
}
    return(
        <Fragment>
            <h2>Crear cita</h2>
            <form
            onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
                onChange={actualizarState}
                value = {mascota}
                 />
                <label>Nombre Dueño de la Mascota</label>
                <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre del Dueño"
                onChange={actualizarState}
                value = {propietario}
                 />
                <label>Fecha</label>
                <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value = {fecha}
                 />
                 <label>Hora</label>
                <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value = {hora}
                 />
                <label>Sintoma</label>
                <textarea
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
                value = {sintomas}
                ></textarea>
                <button
                type="submit"
                className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;
