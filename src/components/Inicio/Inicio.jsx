import React from 'react';
import backgroundImg from "../../images/bacground.png"
import "./inicio.css"

const Inicio = () => {
    return ( 
        <>
            <div className='container-inicio-img'>
                <img src={backgroundImg} alt=''></img>
            </div>
        </>
     );
}
 
export default Inicio;