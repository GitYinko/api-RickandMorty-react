// import React, { useEffect, useState } from 'react'

// const App = () => {

//     const [contador, setContador] = useState(0);

//     //este hook siempre espara una funcion de flecha
//     useEffect(() => { //Al usar este Hook, le estamos indicando a React que el componente tiene que hacer algo después de renderizarse.

//         console.log(`contador: ${contador}`);

//     }, [contador])// Solo se vuelve a ejecutar si count cambia,se puede poner mas de un valor pero se recomienda usar otro useEffect
//     //Omite efectos para optimizar el rendimiento solo va a renderizar o actualizar lo que esta entre corchetes
//     // En algunos casos, sanear o aplicar el efecto después de cada renderizado puede crear problemas de rendimiento.
//     // Puedes indicarle a React que omita aplicar un efecto si ciertos valores no han cambiado entre renderizados.
//     // Para hacerlo, pasa un array como segundo argumento opcional a useEffect:

//     return (
//         <div className='container'>
//             <h1>App rick and Morty</h1>
//             <h3>{contador}</h3>
//             <button onClick={() => setContador(contador + 1)}>Aumentar</button>
//         </div>
//     )
// }

// export default App




import React, { useEffect, useState } from 'react'
import Form from './component/Form'
import PintarDatos from './component/PintarDatos'

const App = () => {


    const [namePesonaje, setNamePersonaje] = useState(() => { // creamos una funcion de flecha para leer el local directamente en el estado por que si lo dejamos vacio se recarga y no se guarda en el local.
        const enMemoria = localStorage.getItem('personajeApi')
        const initialValue = JSON.parse(enMemoria)
        return initialValue || ''
    });




    // const [namePesonaje, setNamePersonaje] = useState("");

    //funciona de esta forma cuando esta la pagina cargada en un servidor como netlify

    // useEffect(() => {

    //     if (localStorage.getItem("personajeApi")) {
    //         setNamePersonaje(JSON.parse(localStorage.getItem("personajeApi")));
    //     }

    // }, []);





    //hacemos un useEffect para guardar en el local el nombre pasado por el input y que me mantenga la busqueda despues de cargar la pàgina 



    useEffect(() => {

        localStorage.setItem("personajeApi", JSON.stringify(namePesonaje))

    }, [namePesonaje]);



    return (
        <>
            <div className='container'>

                <h1 className='d-flex justify-content-center m-5'><span className='text-info'>App rick a</span><span className='text-warning'>nd Morty</span></h1>

                <Form
                    setNamePersonaje={setNamePersonaje} />

                <PintarDatos
                    namePesonaje={namePesonaje} />

            </div>

        </>
    )
}

export default App