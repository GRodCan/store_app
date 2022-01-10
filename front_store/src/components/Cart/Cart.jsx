import React, { useContext } from "react";
import Item from "../Item/Item";
import { cartContext } from "../../context/cartContext";
import "./Cart.css"

const Cart = () => {
  
  const {cart,setCart} = useContext(cartContext)

  const removeToCart=(item)=>{      
    const{id_item,item_name, category, price, rate,id_supplier,many}=item
    const newItem={id_item,item_name, category, price, rate,id_supplier,
      "many":(many-1)}
    let newCart
    newItem.many>0?
      newCart=cart.map(element=>{
        if (id_item===element.id_item){
                
          return newItem
        }
        return element
    })
    : newCart=cart.filter(element=>id_item!=element.id_item);
    
    setCart(newCart)}

  return <div id="cart">
    <h2>Su carro</h2>
    {cart.length>0?cart.map((element,i)=><div className="item" key={i}>
      <Item data={element} cart={true} />
      <button className="deleteButton" onClick={()=>removeToCart(element)}>Borrar</button>
      </div>):
      <p>Su carro se encuentra vacío.</p>}
  </div>

};

export default Cart;
