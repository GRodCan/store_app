import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

import { cartContext } from './context/cartContext';
import {suppliersContext} from './context/suppliersContext'
import {productContext} from './context/productContext'

import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {

  const [cart, setCart] = useState([])
  const [suppliers, setSuppliers] = useState([])
  const [products, setProducts] = useState([])
  useEffect(async() => {
    
    const dataSuppliers= await axios.get("http://localhost:5000/api/suppliers")
    const resSuppliers= await dataSuppliers.data.suppliers
    setSuppliers(resSuppliers)

    const dataProducts= await axios.get("http://localhost:5000/api/items")
    const resProducts= await dataProducts.data.items
    setProducts(resProducts)
  
  }, [])
  
  
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <cartContext.Provider value={{cart, setCart}}>
    <suppliersContext.Provider value={suppliers}>
    <productContext.Provider value={{products, setProducts}}>
    <Main/>
    </productContext.Provider>
    </suppliersContext.Provider>
    </cartContext.Provider>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
