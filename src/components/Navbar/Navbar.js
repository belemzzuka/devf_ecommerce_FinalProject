import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {useUserContext} from '../../context/userContext'
import {useProductContext} from "../../context/productContext";
import SearchBar from "./SearchBar";



const Navbar = () => {
  //const token = window.localStorage.getItem('token'); Ya no se necesita porque traes la validacion del token de Context
  const context = useUserContext()
  const contextProduct = useProductContext()
  
  console.log(contextProduct.producto.filter(item => item.product_name.toLowerCase().includes('fish'))  );
  return (
    <>
      <nav className="navbar">
        {/* <!-- LOGO --> */}
        <div className="logo">Tienda virtual</div>
        <a>
          <SearchBar/>
        </a>
        {/* <!-- NAVIGATION MENU --> */}
        <ul className="nav-links">
          {/* <!-- USING CHECKBOX HACK --> */}
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          {/* <!-- NAVIGATION MENUS --> */}
          <div className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            {context.usuarioActual ? (
            <>
            <li>
              <Link to="/profile">
                Bienvenido {context.usuarioActual.user.first_name}
              </Link>
            </li>
            <li>
              <Link to="/item">Productos</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            </>
            ) : ( //hasta donde cierra el parentesis se ejecuta si el usuarioActual existe. Lo siguiente a partir de aqui se ejecuta cuando no hay usuarioActual
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;