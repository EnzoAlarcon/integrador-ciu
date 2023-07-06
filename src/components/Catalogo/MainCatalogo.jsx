import React, { useState } from 'react';
import MenuCatalogo from './MenuCatalogo';
import Formulario from './Form/Formulario';
import Almacenamiento from './Almacenamiento/Almacenamiento';
import { useLocalStorage } from '../LocalStorage/LocalStorage';
import "./menuCatalogo.css"

const MainCatalogo = () => {

    //visibilidad del formulario
    const [visible, setVisible] = useState(false);

    const toggleForm = () => {
        setVisible(!visible);
    }

    const [listaMascotas, setlistaMascotas] = useLocalStorage("listaMascotas", []);

    const agregarMascota = (mascota) => {
        setlistaMascotas([...listaMascotas, mascota]);
        console.log(listaMascotas)
    }

    const eliminarMascota = (id) => {
        const nuevaListaMascotas = listaMascotas.filter(mascota => mascota.id !== id);
        setlistaMascotas(nuevaListaMascotas)
        console.log(listaMascotas)
    }

    return (
        <>
            <div id='catalogo'>
                <Formulario visible={visible} toggleForm={toggleForm} onAgregarMascota={agregarMascota} />
                <MenuCatalogo toggleForm={toggleForm} />
                <Almacenamiento mascotas={listaMascotas} eliminarMascota={eliminarMascota} />
            </div>
        </>
    );
}

export default MainCatalogo;