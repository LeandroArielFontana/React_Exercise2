import React, { useEffect, useState } from 'react';

const Exercise2 = () => {
    const initialState = {
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellidos: 'San José'
    };

    function tick() {
        setClock((prevState) => {
           let edad = prevState.edad +1;
           return {
              ...prevState,
              fecha: new Date(),
              edad
           }
        });
    }

    const [clock, setClock] = useState(initialState);

    useEffect(() => {

        const timerID = setInterval (
            () => tick(), 1000
        );

        return () => {
            clearInterval (timerID);
        };
    }, []);

    return (
        <div>
            <h2>
                Hora Actual: { clock.fecha.toLocaleTimeString() }
            </h2>
            <h3>{ clock.nombre } { clock.apellidos }</h3>
            <h1>Edad: { clock.edad }</h1>
        </div>
    );
}

export default Exercise2;