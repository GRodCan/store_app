import React from "react";
import { Route,Routes } from 'react-router-dom';
import Products from "../Products"
import Cart from "../Cart"
import Suppliers_list from "../Suppliers_list/Suppliers_list";
import Item_info from "../Item_info/Item_info";
import useQuery from '../../hooks/useQuery';
import './Main.css'


const Main = () => {
  let query= useQuery();
  return (
<main>
  <Routes>
      <Route path="/" element={<Products/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/suppliers" element={<Suppliers_list/>} />
      <Route path="/item" element={<Item_info id_item={query.get("item")}/>} />
  </Routes>
</main>);
};

export default Main;
