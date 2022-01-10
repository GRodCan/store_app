import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios"
import ItemsList from "../Items_list";
import Paginator from "../Paginator/Paginator";
import useDebounce from '../../hooks/useDebounce'
import { suppliersContext } from "../../context/suppliersContext";
import useSortProducts from "../../hooks/sortProducts";
import { productContext } from "../../context/productContext";
import "./Products.css"



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
  const [input, setInput] = useState("")

  const debouncedSearchTerm = useDebounce(input, 1500);

  useEffect(async() => {    
    const dataProducts= await axios.get("http://localhost:5000/api/items")
    const resProducts= await dataProducts.data.items
      let arrayCategories= await resProducts.map((item)=>item.category)
      setCategories(arrayCategories.filter((value, i) =>arrayCategories.indexOf(value) === i))
      setProducts(resProducts)
  }, [filter==="all"])
    
  useEffect(async() => {
        if (debouncedSearchTerm) {
            setFilter("name")
            const dataProducts= await axios.get("http://localhost:5000/api/items")
            const resProducts= await dataProducts.data.items
            const results=resProducts.filter((element)=>element.item_name.includes(debouncedSearchTerm))
            console.log(results);
            setProducts(results)
          }
  },[debouncedSearchTerm]);
    
    
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

  const handleChange_Text = event => setInput(event.target.value)

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
  


  return <div id="products">
    <section id="search">
      <h2>Busqueda</h2>
      
      <h3>Orden:</h3>
      <div id="sorter" >
          <button className="sorterButton" onClick={()=>{clearSort(); sortName===true?setSortName(false):setSortName(true)}}>Nombre</button>
          <button className="sorterButton" onClick={()=>{clearSort(); sortRate===true?setSortRate(false):setSortRate(true)}}>Puntuación</button>
          <button className="sorterButton" onClick={()=>{clearSort(); sortPrice===true?setSortPrice(false):setSortPrice(true)}}>Precio</button>
      </div>

      <h3>Filtro:</h3>
      <input type="text" name="input" id="input" onChange={handleChange_Text} value={input} placeholder='Ej. "Earphones"'/>
      <form ref={changeFilter} onChange={handleChange} id="filter">
        <input type="radio" name="first_filter" value="all" id="all" className="inputRadio"/>
        <label htmlFor="all" className="labelRadio">Todo</label>
        <input type="radio" name="first_filter" value="category" id="category" className="inputRadio"/>
        <label htmlFor="category" className="labelRadio">Categoría</label>
        <input type="radio" name="first_filter" value="suppliers" id="suppliers" className="inputRadio"/>
        <label htmlFor="suppliers" className="labelRadio">Marca</label>
      </form>
      
      {
        filter==="category"?
        categories.map((category,i)=><button key={i} className="filterButton" onClick={()=>{setPage(10);searchCategory(category)}}>{category.charAt(0).toUpperCase() + category.slice(1)}</button>)
        :filter==="suppliers"?
        suppliers.map((supplier,i)=><button className="filterButton" onClick={()=>{setPage(10);searchSupplier(i+1)}} key={i}>{supplier.supplier_name}</button>):null
      }
    </section>
    <Paginator items_number={products.length} change={setPage} page={page}/>
    <ItemsList items={useSortProducts(products,{sortName,sortPrice,sortRate}).slice((page-10),page)}/>
  </div>;
};

export default Products;
