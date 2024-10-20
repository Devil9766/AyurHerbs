import { useState } from 'react'

import './App.css'
import Header from './components/header'
import {  Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import Products from './components/Products'

function App() {
  function getKey(key){
    console.log(key)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/products' element={<Products giveKey={getKey} />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
