import React from 'react';
import { Card } from 'react-bootstrap';
import "./card.css"
import BotonCerrar from "../../Botones/BotonCerrar/BotonCerrar"

const CardMascota = ({ mascota, eliminarMascota }) => {
    
    const primerLetraMayus = palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1);

    return (
        <>
        <div className='card-container'>
            <Card style={{ width: '311px', height: "336px" }}>
                <div className="container-card-image">
                    <BotonCerrar onClick={() => eliminarMascota(mascota.id)}/>  
                    <Card.Img variant="top" src={mascota.imagen} className='imagen' />
                </div>
                <Card.Body>
                    <Card.Title className='titulo'>{primerLetraMayus(mascota.nombre)}</Card.Title>
                    <Card.Text className='descripcion'>
                        {primerLetraMayus(mascota.tipo)} de {mascota.edad} años.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </>
    );
}

export default CardMascota;