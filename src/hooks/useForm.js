/* REGLAS PARA CREAR UN CUSTOMIZED HOOK
1. Siempre se deben llamar empezando con use, ejemplo: useLoQueSea
2. Siempre son funciones porque es React funcional
*/


import React, {useState} from 'react'

export default function useForm(callback,datos) { //Enviando los parametros por props. No se tienen que llamar sendData igualito porque son props. Callback es funcion a ejecutar, nombre standard

    const [inputs,setInputs] = useState(datos); //Vamos a guardar los valores del formulario

    /* datos ES ESTO:
    "nombre":'Pipino',
    "apellido":'Renato',
    "edad":4,
    "genero":'Masculino',
    "email": 'pipino@home.com',
    "password":'123456'
    */

    const handleInput = (event) =>{
        const {name,value} = event.target;
        console.log(event.target); //Esto solo se imprime si se cambia algo en el input
        console.log("Este es el nombre:" + name + " Este es el valor/dato:" + value); //Name y value son los parametros del input html tag. Si imprimimos el event.target es la etiqueta input
        setInputs({ ...inputs, [name]: value });
        console.log(inputs);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); //Evita que se recarge la pagina
        callback(inputs);
        //registerUser(datos) seria el callback
    }

    return { //El hook no regresa JSX
        inputs,
        handleSubmit,
        handleInput
    }

}
