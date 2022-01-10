import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  background-color: rgba(153, 205, 50, 0.76);
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding:5px;
  position: fixed;
  top: 39px;
  right: 0px;
  z-index: 20;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  
  li {
    color:rgba(255, 255, 255, 0.89);
    background-color: rgba(150, 200, 46, 0.50);
    padding: 5px;
    margin-left:3px;
    border:solid;
    border-width:1px;
    border-radius:10px;
    text-align: center;
    font-weight: 500;

  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(153, 205, 50, 0.76);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    margin-right:0px;
    top: 10;
    right: 0;
    height: 100vh;
    width: 225px;
    padding-top: 1rem;
    transition: transform 0.3s ease-in-out;
    li {
      margin-top:3px;
      
    }
  }
`;

const Nav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/" className='link'><li>Inicio</li></Link>
      <Link to="/products" className='link'><li>Catálogo</li></Link>
      <Link to="/cart" className='link'><li>Carrito</li></Link>
      <Link to="/suppliers" className='link'><li>Marcas que trabajan con nosotros</li></Link>
    </Ul>
    
  )
}

export default Nav

