import React from 'react';
import useForm from '../hooks/useForm'
import axios from 'axios';
import { useHistory } from 'react-router';
import './Signup.css';

export default function Signup() {
    const history = useHistory();
    const registerUser = (datos) => {
        //Se hace el post a la API para registrar usuario
        //Se puede validar que la contraseña sea igual a confirmar contraseña
        axios.post(`https://ecomerce-master.herokuapp.com/api/v1/signup`, datos)
        .then(response => {
            if(response.status===200){
                //activar la notificacion
                //redireccionar a login
                history.pushState("/login");
            }
            console.log(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }
    const {inputs, handleInput, handleSubmit} = useForm(registerUser, {})

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label for="nombre">Nombre: </label><input type="text" id= "first_name" name="first_name" placeholder="Pon tu nombre" onChange={handleInput} value={inputs.nombre}></input>
                <label>Apellido: </label><input type="text" id="last_name" name="last_name" placeholder="Pon tu apellido" onChange={handleInput} value={inputs.apellido}></input>
                <label>Fecha de Nacimiento </label><input type="date" id="birth_date" name="birth_date" placeholder="Pon tu edad" onChange={handleInput} value={inputs.edad}></input>
                <label>Genero: </label><input type="text" id="gender" name="gender" placeholder="Pon tu genero" onChange={handleInput} value={inputs.genero}></input>
                <label>E-mail: </label><input type="email" id="email" name="email" placeholder="Pon tu email" onChange={handleInput} value={inputs.email}></input>
                <label>Password: </label><input type="password" id="password" name="password" placeholder="Pon tu password" onChange={handleInput} value={inputs.password}></input>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
