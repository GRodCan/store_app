import React, { useContext } from "react";
import { cartContext } from "../../context/listContext";
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
          console.log(n)
          newItem.many=n+1
          console.log(newItem)
          return newItem
        }
        return element
    })
    : newCart=cart.concat(item);
    console.log(newCart)
    setCart(newCart)
  }
  

  return <div>
    {items.map((element,i)=><div onClick={()=>addToCart(element)} key={i}><Item data={element} /></div>)}
  </div>;
};

export default Items_list;
