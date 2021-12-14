import React from 'react'
import useForm from '../hooks/useForm'
import axios from 'axios';
import { useHistory } from 'react-router';
import './Signup.css';

export default function New() {
    const history = useHistory();
    const token = window.localStorage.getItem('token'); //variable que trae el token de localStorage

    const registerProduct = (datos) => {
        //Se hace el post a la API para registrar usuario
        //Se puede validar que la contraseña sea igual a confirmar contraseña
        if(token){ //si existe el token
            const config = { //guardamos el token en la variable config
                headers:{
                    Authorization:`JWT ${token}`
                }
            }
        axios.post(`https://ecomerce-master.herokuapp.com/api/v1/item`, datos , config)
        .then(response => {
            if(response.status===201){
                //activar la notificacion
                //redireccionar a login
                alert("Producto agregado satisfactoriamente")
            }
            console.log(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }
    }
    const {inputs, handleInput, handleSubmit} = useForm(registerProduct, {})

    return (
        <div>
            <h1>Registrar nuevo producto</h1>
            <form onSubmit={handleSubmit}>
                <label for="nombre">Nombre del producto: </label><input type="text" id= "product_name" name="product_name" placeholder="Nombre del producto" onChange={handleInput} value={inputs.product_name}></input>
                <label>Descripción: </label><input type="text" id="description" name="description" placeholder="Descripción del producto" onChange={handleInput} value={inputs.description}></input>
                <label>Precio: </label><input type="number" id="price" name="price" placeholder="Precio del producto" onChange={handleInput} value={inputs.price}></input>

                <label>Categoria: </label>
                    <select id="category" name="category">
                        <option value="Books">Books</option>
                        <option value="Movies">Movies</option>
                        <option value="Music">Music</option>
                        <option value="Games">Games</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Computers">Computers</option>
                        <option value="Home">Home</option>
                        <option value="Garden">Garden</option>
                        <option value="Tools">Tools</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Health">Health</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Toys">Toys</option>
                        <option value="Kids">Kids</option>
                        <option value="Baby">Baby</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Shoes">Shoes</option>
                        <option value="Jewelery">Jewelery</option>
                        <option value="Sports">Sports</option>
                        <option value="Outdoors">Outdoors</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Industrial">Industrial</option>
                        onChange={handleInput} value={inputs.category}
                    </select>                
                <label>Brand: </label><input type="text" id="brand" name="brand" placeholder="Marca del producto" onChange={handleInput} value={inputs.brand}></input>
                <label>SKU: </label><input type="text" id="sku" name="sku" placeholder="Pon el SKU" onChange={handleInput} value={inputs.sku}></input>
                <label>Imagen: </label><input type="text" id="image" name="image" placeholder="Pon la URL del producto" onChange={handleInput} value={inputs.image}></input>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
