import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../context/productContext";
import { suppliersContext } from "../../context/suppliersContext";
import Item from "../Item/Item";
import Supplier from "../Supplier/Supplier";
import './Item_info.css'


const Item_info = ({id_item}) => {  
  const {products} = useContext(productContext)
  const suppliers = useContext(suppliersContext)
  
  const [item, setItem] = useState({})
  const [supplier,setSupplier]=useState({})
  useEffect(async() => {
    await setItem(products.filter(element=>id_item==element.id_item)[0])
  }, [products])
  useEffect(async() => {
    await setSupplier(suppliers.filter(element=>item.id_supplier===element.id_supplier)[0])
  }, [item])


  return <div id="item_info">
    <h2>Producto</h2>
    {item?<Item data={item}/>:null}
    <h2>Proveedor</h2>
    {supplier?<Supplier supplier={supplier}/>:null}
  </div>;
};

export default Item_info;
