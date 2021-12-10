import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import withProtection from '../utils/withProtection';
import './Item.css';

const Item = () => {
    let { id } = useParams(); //bring product id from URL to build the endpoint
    const oneItemURL = `https://ecomerce-master.herokuapp.com/api/v1/item/${id}`
    const [ itemDescription, setItemDescription ] = useState({});

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
            <a class="btn btn-primary" href="#" role="button">Comprar</a>
        </div>
    )
}

export default withProtection(Item);