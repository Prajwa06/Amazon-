import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductFeed from './components/ProductFeed';
import axios from 'axios';
import Product from './components/Product';
import product from './products';
function App() {
  const getRes=async()=>{
    const products =await axios.get("https://fakestoreapi.com/products")
    console.log(products);
   
    return products
  }
  let products=product;
  
 
  
 
 
  return (
    <div className="App">
     <Header/>
    
     <div className="max-w-screen-xl mx-auto">
      <Banner/>
      <ProductFeed products={products && products}/>
      
    </div>
    
    </div>
  );
}

export default App;
