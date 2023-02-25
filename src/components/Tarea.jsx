import React from "react";

function Tarea({tarea, onDelete}){
    return(
        <div className={`task ${(tarea.terminada) ? 'terminado': ''}`}>
            <h3>{tarea.texto} <span style={{color: 'red', cursor: 'finished'}} onClick={()=>onDelete(tarea.id)} >X</span></h3>
            <p>{tarea.fecha} </p>
        </div>
    )
}

export default Tarea;