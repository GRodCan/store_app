import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return <nav>
  <ul>
    <li><Link to="/">Inicio</Link></li>
    <li><Link to="/products">Catálogo</Link></li>
    <li><Link to="/cart">Carrito</Link></li>
    <li><Link to="/suppliers">Marcas que trabajan con nosotros</Link></li>
    
    
  </ul>
</nav>;
};

export default Nav;

