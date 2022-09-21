import "./Task.css";

export const Task = ( { titulo, descripcion, estado, cambiarEstado, eliminarTarea} ) => {

  return(
    <div className="task">
      <div className="taskHeader">
        <h2>{ titulo }</h2>
        <button onClick={ eliminarTarea } className="noBorder noBg red-f">X</button>
      </div>
      <p>{ descripcion }</p>
      <div className={ "estado swap " + estado } onClick={ cambiarEstado }>
        <span>{ estado }</span>
        <i className="fa-solid fa-rotate"></i>
      </div>
    </div>
  );
}