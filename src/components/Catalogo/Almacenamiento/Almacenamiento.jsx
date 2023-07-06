import React from 'react';
import CardMascota from "../Card/CardMascota"
import "./almacenamiento.css"

const Almacenamiento = ({ mascotas, eliminarMascota }) => {


    return (
        <>
            <div className='container-almacenamiento'>
                <div className='container-mascotas'>
                        {mascotas.map(mascota => (
                            <CardMascota key={mascota.id} mascota={mascota} eliminarMascota={eliminarMascota} />
                            ))}
                </div>
            </div>
        </>
    );
}

export default Almacenamiento;