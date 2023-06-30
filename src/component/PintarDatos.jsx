import Swal from 'sweetalert2';
import React, { useEffect, useState } from 'react'
import Personajes from './Personajes';
import Loading from './Loading';

const PintarDatos = ({ namePesonaje }) => {


    //creamos un metodo de estado para capaturar los results de la api
    const [personaje, setPersonaje] = useState([]);//pasamos la array vacia para guardar esos resultados

    //creamos una constante para capturar el estado del loading
    const [loading, setLoading] = useState(false);




    //vamos a usar useEffect para pintar la funcion consumirApi()
    useEffect(() => {

        consumirApi(namePesonaje);

    }, [namePesonaje])




    //ahora vamos a consumir la api con fetch
    const consumirApi = async (nombre) => {

        //le vamos a decir que cuando comience nuestra solisutud vamos a decir que nuestro setaloading parta en true, entonces se activaria nuestro spinner
        setLoading(true);


        const Url = `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`;

        try {

            const res = await fetch(Url)
            // console.log(res);

            //como me pone un codigo de error de busqueda 404 antes de convertir a json podemos poner un alertError
            if (!res.ok) {

                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Personaje no encontrado 😥',
                    background: "#56585D",
                    color: "#fff",
                    showConfirmButton: false,
                    timer: 2000

                })
            }

            //hacenos un metodo en el que valos a recibir el json
            const datos = await res.json();

            setTimeout(() => {

                // setPersonaje((old) => [...datos.results, ...old])//de esta forma traemos los datos concatenados, es decir, que con (...old) estamos trayendo los datos antiguos y con (...datos.results) los actuales que buscamos en el input.

                setPersonaje(datos.results)

            }, 1500)


        } catch (error) {

        }
        finally {
            //y cuando falle o sea exitoso lo pasamos como false al loading

            setTimeout(() => {

                setLoading(false)

            }, 1500)
        }

    }



    //otra opcion para llamar al loading 
    // if (loading) {
    //     return (<Loading />)
    // }


    return (
        <>
            {/* decimos que si loading es verdadero llamamos al componente loading */}
            {loading ? <Loading /> : null}



            <div className="row mt-5">

                {/* vamos a iterar los personajes para poder pintarlos. Lo hacemos mediante el map*/}
                {

                    personaje.map(item => (

                        <Personajes key={item.id} personajeItem={item} />//siempre hay que pasarle la key para localizar ese personaje y lo buscamos por su id, ademas le vamos a pasar el item que se va a comportar como un personaje(es solo un personaje no todo el array) y lo llamamos como props en el componente Personaje.

                    ))//siempre tenemos que retornar algo


                }

            </div>




        </>
    )
}

export default PintarDatos