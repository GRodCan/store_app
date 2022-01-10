import React from 'react';
import styled from 'styled-components';
import Burger from '../Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 -30px 0 40px;
  display: flex;
  justify-content: space-between;
  .logo{
    margin: 10px 0 0 20px;
  }
  
`

const Navbar = () => {
  return (
    <Nav>
      <h2 className='logo'>Logo</h2>
      <Burger />
    </Nav>
  )
}

export default Navbar
