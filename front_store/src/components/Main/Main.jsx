import React from "react";
import { Route,Routes } from 'react-router-dom';

import Home from "../Home";
import Products from "../Products"
import Cart from "../Cart"

const Main = () => {
  
  return (
<main>
  <Routes>
               <Route path="/" element={<Home/>} exact />
               <Route path="/products" element={<Products/>} />
               <Route path="/cart" element={<Cart/>} />
               
  </Routes>
</main>);
};

export default Main;
