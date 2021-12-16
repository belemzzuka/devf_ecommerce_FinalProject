import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import withProtection from '../utils/withProtection';
import { useUserContext } from '../context/userContext';
import './Item.css';
import { useHistory } from 'react-router';
import { useCarritoContext } from '../context/shoppingContext';



const Item = () => {
    const context = useUserContext()
    const history = useHistory();
    let { id } = useParams(); //bring product id from URL to build the endpoint
    const oneItemURL = `https://ecomerce-master.herokuapp.com/api/v1/item/${id}`
    const [ itemDescription, setItemDescription ] = useState({});
    const shoppingContext = useCarritoContext();

    useEffect(() => {
        axios.get(oneItemURL)
        .then((response) => {
        if(response.status === 200){
            setItemDescription(response.data);
        }
        }).catch((error) => {
            console.log(error)
        })
    },[])

    function Flogin () {
        return history.push ("/login")
    }

    const Comprar = (item) => {
        shoppingContext.setCarrito([...shoppingContext.carrito,item]) //los 3 puntos es destructuración, para traerse todo lo que tiene el array
        console.log(shoppingContext.carrito);
    }
    
    return (
        <div className="itemdescription">
            <h1>iTEM</h1>
            <h3>{itemDescription.product_name}</h3>
            <img alt={itemDescription.product_name} src={itemDescription.image}></img>
            <p>{itemDescription.description}</p>
            <p>SKU: {itemDescription.sku}</p>
            <p>Manufacturer: {itemDescription.brand}</p>
            <p>Category: {itemDescription.category}</p>
            <h2>${itemDescription.price}</h2>
            {context.usuarioActual ? (
                <a class="btn btn-primary" href="#" role="button" onClick={() => Comprar(itemDescription)}>Comprar</a>
            ) : (
                <a class="btn btn-secondary" href="#" role="button" onClick={Flogin}>Iniciar sesión</a>
            ) }

        </div>
    )
}

//export default withProtection(Item);
export default Item;