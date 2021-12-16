import React, { useState, useContext } from 'react';

const CarritoContext = React.createContext();

function CarritoProvider(props) {
    const [carrito, setCarrito ] = useState([]);

    const value={
        carrito, 
        setCarrito
    }

    return <CarritoContext.Provider value={value} {...props} />
}


const useCarritoContext = () => {
    const contextoCarrito = useContext(CarritoContext)
    return contextoCarrito;
}

export{
    CarritoProvider,
    useCarritoContext
}