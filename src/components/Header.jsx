import React from 'react'
import Boton from './Boton'

function Header({titulo, onAdd, showAdd}) {
  return (
    <div className='header'>
      <h3>{titulo} </h3>
      <Boton color={showAdd? 'red' : 'green' } text={showAdd? 'Cerrar' : 'Nueva'} onAdd={onAdd} />
    </div>
  )
}

export default Header