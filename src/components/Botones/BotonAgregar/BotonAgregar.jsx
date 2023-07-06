import React from 'react';
import "./botonagregar.css"

const BotonAgregar = ( {onClick} ) => {
    return ( 
        <>
            <div className='boton'>
                <button onClick={onClick}>Agregar Mascota</button>
            </div>
        </>
     );
}
 
export default BotonAgregar;