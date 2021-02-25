import React from 'react';

const Cita = ({cita,eliminarCita}) => ( 
    <div className="cita">
        <p>Mascota:<span>{cita.mascota}</span></p>
        <p>Propietario:<span>{cita.propietario}</span></p>
        <p>Fecha:<span>{cita.fecha}</span></p>
        <p>Sintomas:<span>{cita.sintomas}</span></p>
        <button
        className="button eliminar u-full-width"
        //el array function espera que suceda el onclick para ejecutar la funcion, si ponemos eliminarCita(cita.id) se ejecuta sin que se presione el button
        onClick={() => eliminarCita(cita.id)}
        >Eliminar cita &times;</button>
    </div>
 );

 
export default Cita;