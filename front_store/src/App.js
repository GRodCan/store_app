import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { cartContext } from './context/listContext';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])
  
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <cartContext.Provider value={{cart, setCart}}>
    <Main/>
    </cartContext.Provider>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
