import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const UserContext = React.createContext(); //necesita un proveedor y un consumidor

//Proveedor
function UserProvider(props){
    const [usuarioActual, setUsuarioActual] = useState(); //aquí vamos a guardar los datos del usuario actual
    const token = window.localStorage.getItem('token'); //variable que trae el token de localStorage

    useEffect(() => {
        if(token){ //si existe el token
            const config = { //guardamos el token en la variable config
                headers:{
                    Authorization:`JWT ${token}`
                }
            }
            axios.get(`https://ecomerce-master.herokuapp.com/api/v1/user/me`, config) //hace la petición del usuario actual, trae config que es el token
            .then((response)=>{
                if (response.status === 200){
                    setUsuarioActual(response.data) //guardamos el resultado de la peticion del usuario actual en la variable UsuarioActual
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },[token])

    const value={
        usuarioActual, 
        setUsuarioActual
    }

    return <UserContext.Provider value={value} {...props} />
}

//Consumidor
const useUserContext = () => {
    const context = useContext(UserContext)
    return context;
}

export{
    UserProvider,
    useUserContext
}