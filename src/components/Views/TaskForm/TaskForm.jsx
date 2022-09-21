import "./TaskForm.css";
import { useState } from 'react';

export const TaskForm = ( ) => {

  const estados = ["active", "incomplete", "finished"];
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState(0);
  const limite = 255;

  const cambiarEstado = () =>{
    estado === 2 ? setEstado(0) : setEstado(estado + 1);
  }

  const limitarLongitud = (e) => {
    let texto = e.target.value;
    if(texto.length <= limite){
      setDescripcion(texto);
    }
  };

  return(
    <form className="taskForm">
      <div className="taskHeader">
        <input type="text" name="titulo" id="titulo" placeholder="Título"/>
      </div>
      <div className="taskDescription">
        <textarea 
        name="descripcion" 
        id="descripcion" 
        cols="20" 
        rows="10" 
        placeholder="Descripción" 
        value={ descripcion }
        onChange={(e) => limitarLongitud(e)}>
        </textarea>
        <span class="limitador">{descripcion.length +"/"+ limite}</span>
      </div>
      <div className={ "estado swap " + estados[estado] } onClick={ cambiarEstado }>
        <span>{ estados[estado] }</span>
        <i className="fa-solid fa-rotate"></i>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}