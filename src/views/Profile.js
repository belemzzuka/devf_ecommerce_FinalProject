import React from 'react';
import withProtection from '../utils/withProtection';
import { useUserContext } from '../context/userContext';

const Profile = () => {
    const context = useUserContext();
    return (
        <div>
            <h1>MI PERFIL</h1>
            {context.usuarioActual ? (
            <>
            <p>Nombre: {context.usuarioActual.user.first_name}</p>
            <p>Apellido: {context.usuarioActual.user.last_name}</p>
            <p>Cumpleaños: {context.usuarioActual.user.birth_date}</p>
            <p>Email: {context.usuarioActual.user.email}</p>
            </>) : <p>NO PUEDES ACCEDER!!</p>}
        </div>
    )
}

export default withProtection(Profile);
