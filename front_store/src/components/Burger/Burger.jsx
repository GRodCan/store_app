import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../Nav';


const StyledBurger = styled.div`
  
  width: 2.5rem;
  height: 2.5rem;
  position: fixed;
  top: 5px;
  padding:1px;
  right: 20px;
  z-index: 20;
  display: flex;
  justify-content:center;
  align-items: center;
  border:solid;
  border-width:1.8px;
  border-radius:10px;
  color:rgba(153, 205, 50, 1);
  background-color: ${({ open }) => open ? 'rgba(255, 255, 255, 0.8)' : 'rgba(153, 205, 50, 1)'};
  @media (max-width: 768px) {
    border:solid;
    border-width:1.8px;
    border-radius:10px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    @media (max-width: 768px){
      margin-left:0;
    }
    margin-left:2px;
    width: 2rem;
    height: 0.3rem;
    background-color: ${({ open }) => open ? 'rgba(153, 205, 50, 1)':'rgba(0, 0, 0, 0.965)' };
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div/>
      <div/>
      <div/>
      </StyledBurger>
      {open?<Nav open={open}/>:null}
    </>
  )
}

export default Burger
