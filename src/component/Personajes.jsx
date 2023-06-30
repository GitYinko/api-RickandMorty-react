import React from 'react'

const Personajes = ({ personajeItem }) => {

    //hacemos la destructuracion para traer las propiedades del los personajes(objetos) y asi no llamamos a personaje.etc por cada elemento.
    const { name, species, image } = personajeItem

    return (
        <div className='col-md-4 mb-3 mt-3 '>
            <div className="card text-bg-dark shadow ">

                {/* los hacemos de forma dinamica mediante las propiedades que traemos del destructuring */}

                <img src={image} alt={`imagen-${name}`} className="card-img-top" />

                <div className="card-body ">
                    <h5 className='card-title'>{name}</h5>
                    <p className='lead text-secundary'>{species}</p>
                </div>

            </div>
        </div>
    )
}

export default Personajes
