import React, { useEffect, useState } from "react";
import { useProductContext } from '../../context/productContext';
import { useHistory } from "react-router";
import './SearchBar.css'

export default function Search() {
  const [valorInput, setValorInput] = useState(""); // Se guarda el valor del input
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]); // Se guarda la ciudad a buscar
  const contextProduct = useProductContext();
  const history = useHistory();
  let resultadoFinales = [];
  useEffect(() => {
    resultadoFinales = contextProduct.producto.filter(item => item.product_name.toLowerCase().includes(resultadosBusqueda));
  }, [resultadosBusqueda]);


  // Funcion para actualizar el estado del input
  const inputHandler = (event) => {
    setValorInput(event.target.value); //Actualizando el estado de valorInput
  };
  //Pongo el valor final de mi input en el estado "ciudad"
  //actualizará la URL por lo tanto se vuelve a ejecutar el useEffect
  const submitHandler = () => {
    setResultadosBusqueda(valorInput);
    history.push(`/search?filtro=${valorInput}`);
  };
    

  return (
    <div className="div__datos" class="input-group mb-3">
      <input
        type="text"
        placeholder="Encuentra productos..."
        onChange={inputHandler}
        class="form-control"
        value={valorInput}
      />
      <a className="text-boton" onClick={submitHandler} class="btn btn-outline-secondary" >Buscar</a>
    </div>
    )
}

     // export {resultadoFinales}