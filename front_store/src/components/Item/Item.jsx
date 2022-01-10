import React, { useContext } from "react";
import { suppliersContext } from "../../context/suppliersContext";
import './Item.css'

const Item = ({data,cart,list}) => {
  
  const {item_name, category, price, rate,id_supplier,many}= data
  const suppliers = useContext(suppliersContext)
  
  const supplier=suppliers.filter(element=>element.id_supplier===id_supplier)[0]
    
  return <div className="item_card">
    <h3>{item_name}</h3>
    <div>
    <p><b>Valoración:</b> {rate}</p>
    {list?null:<p><b>Categoría:</b> {category}</p>}
    <p><b>{price}€</b></p>
    {list?null:supplier?<p><b>Marca:</b> {supplier.supplier_name}</p>:null}
    {cart===true?<h4>Cantidad: {many}</h4>:null}
    </div>
  </div>;
};

export default Item;
