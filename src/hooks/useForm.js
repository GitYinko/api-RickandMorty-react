// CUSTOME HOOKS //
// este hook personalizado sirve para evitar estar escribiendo los metodos handle en cada formulario

import { useState } from "react"

export default function useForm(initialState = {}) {

    const [inputs, setinput] = useState(initialState)

    const handleChange = e => {

        const { name, value, checked, type } = e.target

        setinput((old) => ({
            //obtiene de las propiedades de todo
            ...old,
            [name]: type === "checkbox" ? checked : value

        }));

    };

    const reset = () => {
        setinput(initialState);
    }

    //en este return vamos a devolver todos lo metodos
    return [inputs, handleChange, reset];
}

