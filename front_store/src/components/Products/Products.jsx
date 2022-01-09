import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios"
import ItemsList from "../Items_list";
import Paginator from "../Paginator/Paginator";
import useDebounce from '../../hooks/useDebounce'
import { suppliersContext } from "../../context/suppliersContext";
import useSortProducts from "../../hooks/sortProducts";
import { productContext } from "../../context/productContext";




const Products = () => {
  
const changeFilter = useRef()

const suppliers = useContext(suppliersContext)
const {products, setProducts} = useContext(productContext)

const [sortName, setSortName] = useState(null)
const [sortRate, setSortRate] = useState(null)
const [sortPrice, setSortPrice] = useState(null)
const [filter, setFilter] = useState("")
const [categories, setCategories] = useState([])
const [page, setPage] = useState(10)

  useEffect(async() => {    
    const dataProducts= await axios.get("http://localhost:5000/api/items")
    const resProducts= await dataProducts.data.items
    let arrayCategories= await resProducts.map((item)=>item.category)
    setCategories(arrayCategories.filter((value, i) =>arrayCategories.indexOf(value) === i))
    setProducts(resProducts)
    
  }, [filter==="all"])
  
  

  
  
  
  const handleChange = async event => {
    event.preventDefault(); 
    let i 
    for (i = 0; i < changeFilter.current.length; i++){ 
      if (changeFilter.current[i].checked) {
        break; 
      }
    }
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
  
    const clearSort=()=>{
      setSortPrice(null)
      setSortRate(null)
      setSortName(null)
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
        <div >
          <button onClick={()=>{clearSort(); sortName===true?setSortName(false):setSortName(true)}}>Nombre</button>
          <button onClick={()=>{clearSort(); sortRate===true?setSortRate(false):setSortRate(true)}}>Puntuación</button>
          <button onClick={()=>{clearSort(); sortPrice===true?setSortPrice(false):setSortPrice(true)}}>Precio</button>
        </div>
      
      {
        filter==="category"?
        categories.map((category,i)=><button key={i} onClick={()=>searchCategory(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}</button>)
        :filter==="suppliers"?
        suppliers.map((supplier,i)=><button onClick={()=>searchSupplier(i+1)} key={i}>{supplier.supplier_name}</button>):null
        
      }

    </section>
    <br />
    <br />
    <br />

    
    <Paginator items_number={products.length} change={setPage} page={page}/>
    <ItemsList items={useSortProducts(products,{sortName,sortPrice,sortRate}).slice((page-10),page)}/>
    

  </div>;
};

export default Products;
