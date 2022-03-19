import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from './Components/Products/Products';
import Navbar from './Components/Navbar/Navbar';


function App() {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
      fetch("https://fakestoreapi.com/products")
      .then(res=>res.json())
      .then(data=>setProducts(data))
  },[])

  const [cart,setCart]=useState(0);
  const setCountCart = ()=>{setCart(cart+1)}

  
  return (
    <div className="App">
      <Navbar cart={cart}></Navbar>
      <h1>Tiger commerce with React-js</h1>
    <div className='row container mx-auto'>
    {
      products.map(product=><Products cart={setCountCart} key={product.id} product={product}></Products>)
    }
    </div>
    </div>
  );
}

export default App;
