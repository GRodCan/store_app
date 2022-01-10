import React from "react";
import './Supplier.css'

const Supplier = ({supplier}) => {
  const {supplier_name,cif,adress}= supplier
  return <div className="supplier">
    <h3>{supplier_name}</h3>
    <p><b>Dirección:</b> {adress}</p>
    <p><b>CIF:</b> {cif}</p>  
  </div>;
};

export default Supplier;
