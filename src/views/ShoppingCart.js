import React, { useState, useEffect } from 'react';
import { useCarritoContext}  from '../context/shoppingContext';
import './ShoppingCart.css';

export default function ShoppingCart() {
    const shoppingContext = useCarritoContext(); //el contexto que usamos

    const sumarPreciosCarrito = (carrito) => { //Funcion para sumar precios
        let totalCompra = 0;

        carrito.map((item) => {

            //aquí tendríamos que multiplicar Qty * item.price y hacer la suma

            totalCompra += item.price; //suma acumulatoria de cada uno de los precios de los items en el carrito
        })
        return totalCompra;
    }

    return (
        <>
        <div className="shopping__title">
            <h1>Shopping Cart</h1>
            <span> Gracias por comprar con nosotros</span>
            <span>Te esperamos pronto</span>
        </div>
        <div className="carrito">
            <div>
                {shoppingContext.carrito.map((item) => {
                    return(
                    <div className="carrito__item">
                    <img alt={item.product_name} src={item.image}></img>
                    <span>{item.product_name}</span>
                    <span>Price: ${item.price}.00</span>
                    <span>Qty: TBD</span>
                    <button>+</button>
                    <button>-</button>
                    </div>)
                })}
            </div>
            <div className="checkout">
                <h2>Total a Pagar</h2>
                <p>$ {sumarPreciosCarrito(shoppingContext.carrito)}.00</p>
            </div>
        </div>
        </>
    )
}
