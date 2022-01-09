import React, { useContext } from "react";
import { suppliersContext } from "../../context/suppliersContext";

const Item = ({data,cart,list}) => {
  const suppliers = useContext(suppliersContext)
  
  
  const {item_name, category, price, rate,id_supplier,many}= data
  
    const supplier=suppliers.filter(element=>element.id_supplier===id_supplier)[0]
    
  return <div>
    <h3>{item_name}</h3>
    <p>Valoración: {rate}</p>
    {list?null:<p>Categoría: {category}</p>}
    <p>{price}€</p>
    {list?null:supplier?<p>{supplier.supplier_name}</p>:null}
    {cart===true?<h4>Cantidad: {many}</h4>:null}
  </div>;
};

export default Item;
