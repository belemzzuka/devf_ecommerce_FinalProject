import React, { useEffect, useState } from "react";
import { useProductContext } from '../../context/productContext';
import {Redirect} from "react-router-dom";
import { useHistory } from "react-router";

export default function Search() {
  const [valorInput, setValorInput] = useState(""); // Se guarda el valor del input
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]); // Se guarda la ciudad a buscar
  const contextProduct = useProductContext()
  const history = useHistory()
  let resultadoFinales = []
  useEffect(() => {
    console.log("antes de la llamada");
    console.log(contextProduct.producto.filter(item => item.product_name.toLowerCase().includes(resultadosBusqueda))  );
    resultadoFinales = contextProduct.producto.filter(item => item.product_name.toLowerCase().includes(resultadosBusqueda));
    console.log(resultadoFinales);
    console.log("despues de llamar la api");
  }, [resultadosBusqueda]);

  // Funcion para actualizar el estado del input
  const inputHandler = (event) => {
    console.log(event.target.value);
    setValorInput(event.target.value); //Actualizando el estado de valorInput
    //console.log(valorInput);
  };
  //Pongo el valor final de mi input en el estado "ciudad"
  //actualizará la URL por lo tanto se vuelve a ejecutar el useEffect
  const submitHandler = () => {
    setResultadosBusqueda(valorInput);
    console.log(resultadosBusqueda);
    history.push('/search');
     
  };
    
  return (
    <div>
      <h1>Clima</h1>
      <div className="div__datos">
        <input
          type="text"
          placeholder="Ingresa tu ciudad"
          onChange={inputHandler}
          value={valorInput}
        />
        <button className="text-boton" onClick={submitHandler}>Buscar</button>
      </div>
      </div>
      )
      }

     // export {resultadoFinales}