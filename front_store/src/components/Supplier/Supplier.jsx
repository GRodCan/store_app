import React from "react";

const Supplier = ({supplier}) => {
  const {id_supplier, supplier_name,cif,adress}= supplier
  return <div>
    <h3>{supplier_name}</h3>
    <p>Dirección: {adress}</p>
    <p>CIF {cif}</p>  
  </div>;
};

export default Supplier;
