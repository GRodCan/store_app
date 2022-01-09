import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import Item from "../Item/Item";

const Items_list = ({items}) => {
  
  const {cart,setCart} = useContext(cartContext)
  
  const addToCart=(item)=>{
    const{id_item,item_name, category, price, rate,id_supplier}=item
    const newItem={id_item,item_name, category, price, rate,id_supplier,
      many:0}
    let newCart
    item.many=1
    cart.filter(element=>id_item===element.id_item).length>0?
      newCart=cart.map(element=>{
        if (id_item===element.id_item){
          let n=element.many
          
          newItem.many=n+1
          
          return newItem
        }
        return element
    })
    : newCart=cart.concat(item);
    
    setCart(newCart)
  }
  
  // <div onClick={()=>addToCart(element)} key={i}>
  return <div>
    {items.map((element,i)=><Link to={`/item?item=${element.id_item}`} key={i}><Item data={element} list={true}/></Link>)}
  </div>;
};

export default Items_list;
