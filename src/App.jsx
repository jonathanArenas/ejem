import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AddTarea from './components/AddTarea';
import Header from './components/Header';
import Tareas from './components/Tareas';

function App() {
  const [showAddTarea, setShowAddTarea] = useState(false);
  const [ta, setTareas] = useState([
    {
      id:1,
      texto: 'Ir a jugar',
      fecha: '11 de agosto',
      terminada: false
    }
  ]);
  //Agregar tarea

  const addTask = (tarea)=>{
    const id = Math.floor(Math.random()*10000) +1
    const newTask = {id, ...tarea};
    setTareas([...ta, newTask]);
  }

  //Eliminar tarea

  const deleteTask=(id)=>{
    setTareas(ta.filter((tarea) => tarea.id !== id )); 
  }

  return (
   <div className='container'>
      <Header titulo={"Administrador de tareas"} onAdd={()=> setShowAddTarea(!showAddTarea)}  showAdd={showAddTarea} />
      {showAddTarea && <AddTarea onAdd={addTask} /> }
      <Tareas tareas={ta} onDelete={deleteTask} />
   </div>
  )
}

export default App
