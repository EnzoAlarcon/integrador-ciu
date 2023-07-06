import "./formulario.css";
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import close from "../../../images/close.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Formulario = ({ visible, toggleForm, onAgregarMascota}) => {

    const [tipo, setTipo] = useState('');
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [id, setId] = useState(0);

    // Agregamos estados de error para cada campo del formulario
    const [errorTipo, setErrorTipo] = useState(false);
    const [errorNombre, setErrorNombre] = useState(false);
    const [errorEdad, setErrorEdad] = useState(false);



    const handleSubmit = (event) => {
        event.preventDefault();

        // Validamos que los campos no estén vacíos
        if (!tipo) {
            setErrorTipo(true);
            return;
        } else {
            setErrorTipo(false);
        }
        if (!nombre) {
            setErrorNombre(true);
            return;
        } else {
            setErrorNombre(false);
        }
        if (!edad) {
            setErrorEdad(true);
            return;
        } else {
            setErrorEdad(false);
        }


        //API que genera imagenes random
        const urlGato = "https://cataas.com/cat?json=true";
        const urlPerro = "https://dog.ceo/api/breeds/image/random";

        // Crear el objeto mascota con los datos del formulario
        const mascota = {id: id, tipo: tipo, nombre: nombre, edad: edad }

        // Llamar a la API correspondiente para generar la imagen aleatoria
        let urlImagen;
        if (mascota.tipo === 'perro') {
            urlImagen = urlPerro;
        } else {
            urlImagen = urlGato;
        }

        fetch(urlImagen)
            .then(response => response.json())
            .then(data => {
                let imagen;
                if (mascota.tipo === "perro") {
                    imagen = data.message;
                } else {
                    imagen = `https://cataas.com${data.url}`;
                }
                mascota.imagen = imagen;
                setId(id => id + 1);
                onAgregarMascota(mascota)
                toast.success('Se registró la mascota correctamente');
            });
    }

    return (

        <>
            <ToastContainer />
            {visible && (
                <section className='section-form'>
                    <div className='container-form'>
                        <div className="container-form-img">
                            <img src={close} alt="Cerrar" onClick={toggleForm}></img>
                        </div>
                        <div className='form'>
                            <h2>DATOS DE LA MASCOTA</h2>
                            <Form onSubmit={handleSubmit} className="mt-3">
                                <Form.Group controlId="tipo" className="mt-3">
                                    <Form.Label>Tipo:</Form.Label>
                                    <Form.Control as="select" value={tipo} onChange={event => setTipo(event.target.value)}>
                                        <option value="">--Selecciona una opción--</option>
                                        <option value="perro">Perro</option>
                                        <option value="gato">Gato</option>
                                    </Form.Control>
                                    {errorTipo && <Form.Text className="text-danger">Debes seleccionar un tipo de mascota.</Form.Text>}
                                </Form.Group>

                                <Form.Group controlId="nombre" className="mt-3">
                                    <Form.Label>Nombre:</Form.Label>
                                    <Form.Control type="text" value={nombre} onChange={event => setNombre(event.target.value)} />
                                    {errorNombre && <Form.Text className="text-danger">Debes ingresar un nombre.</Form.Text>}
                                </Form.Group>

                                <Form.Group controlId="edad" className="mt-3">
                                    <Form.Label>Edad:</Form.Label>
                                    <Form.Control type="number" value={edad} onChange={event => setEdad(event.target.value)} />
                                    {errorEdad && <Form.Text className="text-danger">Debes ingresar una edad.</Form.Text>}
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100 btn-success mt-4">Registrar</Button>
                            </Form>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default Formulario;