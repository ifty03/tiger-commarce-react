import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from './Components/Products/Products';

function App() {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
      fetch("https://fakestoreapi.com/products")
      .then(res=>res.json())
      .then(data=>setProducts(data))
  },[])
  
  return (
    <div className="App">
      <h1>Tiger commerce with React</h1>
    <div className='row container mx-auto'>
    {
      products.map(product=><Products key={product.id} product={product}></Products>)
    }
    </div>
    </div>
  );
}

export default App;
