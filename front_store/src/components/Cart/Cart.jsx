import React, { useContext } from "react";
import Item from "../Item/Item";
import { cartContext } from "../../context/listContext";

const Cart = () => {
  
  const {cart,setCart} = useContext(cartContext)

  const removeToCart=(item)=>{
    const newCart=cart.filter(element=>element!==item)
    setCart(newCart)
      }

  return <div>
    <h2>Su carro</h2>
    {cart.length>0?cart.map((element,i)=><div>
      <Item data={element} key={i}/>
      <button onClick={()=>removeToCart(element)}>Borrar</button>
      </div>):
      <p>Su carro se encuentra vacío.</p>}
  </div>

};

export default Cart;
