import React, { useEffect, useRef, useState } from "react";
import axios from "axios"
import ItemsList from "../Items_list";
import Paginator from "../Paginator/Paginator";
import useDebounce from '../../hooks/useDebounce'
import Supplier from "../Supplier/Supplier";

const Products = () => {
const changeFilter = useRef()
  const [filter, setFilter] = useState("all")


  const [categories, setCategories] = useState([])
  const [suppliers, setSuppliers] = useState([])
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(10)

  useEffect(async() => {    
    const dataProducts= await axios.get("http://localhost:5000/api/items")
    const resProducts= await dataProducts.data.items
    const dataSuppliers= await axios.get("http://localhost:5000/api/suppliers")
    const resSuppliers= await dataSuppliers.data.suppliers


    let arrayCategories= await resProducts.map((item)=>item.category)
    setCategories(arrayCategories.filter((value, i) =>arrayCategories.indexOf(value) === i))
    setProducts(resProducts)
    setSuppliers(resSuppliers)
  }, [filter==="all"])
  
  
  
  
  const handleChange = async event => {
    event.preventDefault(); 
      let i 
      for (i = 0; i < changeFilter.current.length; i++){ 
         if (changeFilter.current[i].checked) {
            break; 
      }
      } 
    //   setFilter(changeFilter[i].value) 
    console.log((changeFilter.current[i].value));
    setFilter(changeFilter.current[i].value)
    
  }
  const searchCategory=async(category)=>{
    const data= await axios.get(`http://localhost:5000/api/items/category/${category}`)
    await setProducts(data.data.items)
  }
  const searchSupplier=async(id)=>{
    const data= await axios.get(`http://localhost:5000/api/items/supplier/${id}`)
    await setProducts(data.data.items)
  }
  


  return <div>
    <section>
      <h2>Busqueda</h2>
      
      <form ref={changeFilter} onChange={handleChange}>
        <input type="radio" name="first_filter" value="all" id="all"/>
        <label htmlFor="all">Todo</label>
        <input type="radio" name="first_filter" value="category" id="category"/>
        <label htmlFor="category">Categoría</label>
        <input type="radio" name="first_filter" value="suppliers" id="suppliers" />
        <label htmlFor="suppliers">Marca</label>
      </form>
      
      {
        filter==="category"?
        categories.map((category,i)=><button key={i} onClick={()=>searchCategory(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}</button>)
        :filter==="suppliers"?
        suppliers.map((supplier,i)=><button onClick={()=>searchSupplier(i+1)} key={i}><Supplier supplier={supplier}/></button>):null
        
      }

    </section>
    <br />
    <br />
    <br />

    
    <ItemsList items={products.slice((page-10),page)} suppliers={suppliers}/>
    <Paginator items_number={products.length} change={setPage} page={page}/>

  </div>;
};

export default Products;
