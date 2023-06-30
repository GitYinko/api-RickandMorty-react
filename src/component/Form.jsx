import React from 'react'
import useForm from '../hooks/useForm'
import Swal from 'sweetalert2'

const Form = ({ setNamePersonaje }) => {

    //metodo toast para llemar la alert de otro manera
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        background: "#56585D",
        color: "#fff",
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })



    const [inputs, handleChange, reset] = useForm({
        nombre: ""
    })

    const { nombre } = inputs;



    const handleSubmit = (e) => {

        e.preventDefault()

        if (!nombre.trim()) {

            Toast.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'No dejar espacios vacios!'
            })

            return
        }


        //usamos el props para obtener el valor de input y llevarlos a el componente App.
        setNamePersonaje(nombre.trim().toLowerCase())//estos metodos sirven para limpar los espacios en blancos dejados por el usuario(trim()) y toLowerCase()para convertir letras mayusculas en minisculas.

        reset()
    }



    return (
        <>

            <form onSubmit={handleSubmit}>

                <input
                    className='form-control mb-3'
                    type="text"
                    placeholder='Buscar personaje'
                    name='nombre'
                    onChange={handleChange}
                    value={nombre}
                />

                <div className='container d-flex justify-content-center w-100 mt-5'>

                    <button type='submit' className='btn btn-light mb-2'>Buscar</button>

                    <button type='button' className='btn btn-primary mb-2 ms-2'

                        onClick={() => setNamePersonaje("")}

                    >Reiniciar</button>

                </div>

            </form>




        </>


    )
}

export default Form