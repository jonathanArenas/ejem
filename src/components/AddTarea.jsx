import React from 'react'
import { useState } from 'react';

function AddTarea({onAdd}) {
  const [texto, setTexto] = useState('');
  const [fecha, setFecha] = useState('');
  const [terminada, setTerminada] = useState(false)

  const onSubmit = (e)=>{
    e.preventDefault();
    if(!texto){
      alert('Ingrea algo por favor')
    }else{
      onAdd({texto, fecha, terminada})
      setTexto('')
      setFecha('')
      setTerminada(false)
    }

  }
  return (
    <form onSubmit={onSubmit}>
       <div className='form-control'>
            <label>Tarea</label>
            <input type="text" name="tarea" value={texto} onChange={(e)=> setTexto(e.target.value)} placeholder='Agrega una tareas' />
        </div>
        <div className='form-control'>
            <label >Fecha</label>
            <input type="text" name="fecha" value={fecha} onChange={(e)=> setFecha(e.target.value)} placeholder='Teclea una fecha' />
        </div>
        <div className='form-control check'>
            <label >Terminada</label>
            <input type="checkbox" checked={terminada} onChange={(e)=> setTerminada(e.target.checked)} /> 
        </div>
        <input className='btn block' type="submit" value="Agregar Tarea" />
    </form>
  )
}

export default AddTarea