import React from 'react'
import Tarea from './Tarea'

function Tareas({tareas, onDelete}) {
  return (
    <div>
        {tareas.map((tarea)=> (<Tarea key={tarea.id} tarea={tarea} onDelete={onDelete}/>))}
    </div>
  )
}

export default Tareas