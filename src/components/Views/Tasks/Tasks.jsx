import { useState} from "react";
import { Task } from "../Task/Task";
import { TaskForm } from "../TaskForm/TaskForm";
import './Tasks.css';

export const Tasks = () => {

  const estados = ["active", "incomplete", "finished"];
  const [tasks, setTasks] = useState([{
    id: 0,
    titulo: "Task 1",
    descripcion: "Description of task",
    estado: estados[1]
  },
  {
    id: 1,
    titulo: "Task 2",
    descripcion: "Description of task",
    estado: estados[2]
  },
  {
    id: 3,
    titulo: "Task 3",
    descripcion: "Description of task",
    estado: estados[2]
  }
  ]);

  const eliminarTarea = (id) =>{
    let copy = tasks.filter(task => task.id !== id);
    setTasks(copy);
  }

  const cambiarEstado = (id) =>{
    let task = tasks.filter(task => task.id === id)[0];
    let copy = tasks.slice();
    let index = estados.indexOf(task.estado);
    index === 2 ? index = 0 : index ++;
    task.estado = estados[index];
    index = copy.indexOf(task => task.id = id);
    copy[index] = task;

    setTasks(copy);
  }

  return (
      <div className="tasks">
        <TaskForm />
        { tasks.map((task, index) =>{
          return(
            <Task 
            key = {task.id}
            titulo = { task.titulo }
            descripcion = { task.descripcion }
            estado = { task.estado }
            cambiarEstado={ () => {cambiarEstado(task.id)} }
            eliminarTarea={ () => {eliminarTarea(task.id)} }
            />
          );
        })};
      </div>
  );
}