import React from 'react';
import "./menuCatalogo.css";
import BotonAgregar from ".././Botones/BotonAgregar/BotonAgregar"

const MenuCatalogo = ( {toggleForm} ) => { 

    return ( 
        <>
        <div className='container'>
            <div className='container-menu-catalogo'>
                <div className='titulo'>
                    <h2>MASCOTAS</h2>
                </div>
                <BotonAgregar onClick={toggleForm}/>
            </div>
        </div>
        </>
     );
}
 
export default MenuCatalogo;