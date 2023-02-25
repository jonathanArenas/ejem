import React from 'react'

function Boton({color, onAdd, text}) {
  return (
    <button onClick={onAdd} style={{background:color}} className='btn'>{text}</button>
  )
}

export default Boton