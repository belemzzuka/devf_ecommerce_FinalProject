import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const ProductContext = React.createContext(); //necesita un proveedor y un consumidor

//Proveedor
function ProductProvider(props){
    
    //const token = window.localStorage.getItem('token'); //variable que trae el token de localStorage
    const [producto, setProducto ] = useState([]);  //aquí vamos a guardar los datos de los productos

    useEffect(() => {
        axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item`)
        .then((response) => {
            console.log(response.data);
        if(response.status === 200){
            setProducto(response.data);
        }
        }).catch((error) => {
            console.log(error)
        })
    },[])

    const value={
        producto, 
        setProducto
    }

    return <ProductContext.Provider value={value} {...props} />
}

//Consumidor
const useProductContext = () => {
    const contextoProduct = useContext(ProductContext)
    return contextoProduct;
}

export{
    ProductProvider,
    useProductContext
}