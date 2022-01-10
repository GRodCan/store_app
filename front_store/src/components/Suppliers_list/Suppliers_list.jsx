import React, { useContext } from "react";
import Supplier from "../Supplier/Supplier";
import { suppliersContext } from "../../context/suppliersContext";
const Suppliers_list = () => {
  const suppliers = useContext(suppliersContext)
  
  return <div>{suppliers.map((element,i)=><Supplier key={i} supplier={element}/>)}</div>;
};

export default Suppliers_list;
