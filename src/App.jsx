import { useState } from 'react'

import './App.css'
import Header from './components/header'
import {  Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import Products from './components/Products'
import Cart from './components/cart'

function App() {
  const [cart , setCart] = useState([]);
  function getKey(key){
    console.log(key)
  }
  const SetToCart=(obj)=>{
    const index = cart.find((item)=>item.id=== obj.id);
    index? console.log("item already in cart"): setCart((prev)=>{return [...prev , obj]});
  }

  function removeCartItem(obj){
    const items = cart.filter((item)=> item.id !== obj.id);
    setCart(items);

  }
  console.log(cart);
  return (
    <>
      <Header cartCount={cart.length} />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/products'  element={<Products giveKey={getKey} addToCart={SetToCart} />}/>
        <Route path='/cart' element={<Cart scart={cart} removeItem={removeCartItem}/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
