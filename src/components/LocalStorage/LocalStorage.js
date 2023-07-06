import { useState } from "react";

export function useLocalStorage (key, initialValue) {

    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Obtenemos el valor de la clave especificada del almacenamiento local
            const item = window.localStorage.getItem(key)
            // Si el valor existe, lo parseamos como JSON y lo devolvemos como valor inicial del estado
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            // Si ocurre algún error, devolvemos el valor inicial proporcionado como argumento
            return initialValue
        }
    })

    // Definimos la función setValue para actualizar el valor almacenado en el estado y en el almacenamiento local
    const setValue = value => {
        try {
            // Actualizamos el valor del estado y lo almacenamos en el almacenamiento local como una cadena JSON
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            // Si ocurre algún error, mostramos un mensaje de error en la consola
            console.error(error)
        }
    }
    
    // Devolvemos un array con el valor almacenado y la función setValue
    return [storedValue, setValue]
}

