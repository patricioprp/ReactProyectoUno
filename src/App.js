import React, {Fragment,useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from "./components/Cita";

function App() {

  //citas en localStorage

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

if(!citasIniciales){
  citasIniciales = [];
}

  //Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //Para reaalizar ciertas operaciones cuando el state cambia

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    
    if(citasIniciales){
      //si tenemos citas en el state, las guardamos en el localStorage
      localStorage.setItem('citas',JSON.stringify(citas));
    }else{
      localStorage.setItem('citas',JSON.stringify([]));
    }

  },[citas])

  //Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
   guardarCitas([
     ...citas,cita
   ]);
  }
  
  //funcion que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id); //este es un nuevo arreglo
    //este array contiene todas las citas menos la que se quiere eliminar
    guardarCitas(nuevasCitas);
  }
    //Mostrando mensaje condicional

    const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';
    console.log(titulo);
  return (
    <Fragment>
        <h2>Administrador de Pacientes</h2>
        <div className="container">
         <div className="row">
             <div className="one-half column">
                <Formulario
                crearCita = {crearCita}
                />
             </div>
             <div className="one-half column">
               <h2> { titulo }</h2>
              {citas.map( cita => (
                <Cita
                key={cita.id}
                cita = {cita}
                eliminarCita = {eliminarCita}
                />
              ))}    
            </div>
         </div>
        </div>
    </Fragment>
  );
}

export default App;
