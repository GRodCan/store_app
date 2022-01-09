import React from "react";


const Item = (data, remove) => {
  
  const {item_name, category, id_item, price, rate,id_supplier}= data.data
  return <div>
    <h3>{item_name}</h3>
    <p>Valoración: {rate}</p>
    <p>Categoría: {category}</p>
    <p>{price}€</p>
    <p>SupplierAQUI</p>
  </div>;
};

export default Item;
