import React from 'react';
import "./botoncerrar.css"

const BotonCerrar = ( {onClick} ) => {
    return ( 
        <>
            <div onClick={onClick} className="close-boton">
            </div>
        </>
     );
}
 
export default BotonCerrar
