import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer';
import Home from './components/Home'
import Joinus from './components/Joinus/Joinus';
import Navbar from './components/Navbar'
import Products from './components/Products'
import ServiceCommon from './components/servicefile/ServiceCommon';
import Services from './components/Services'

const App = () => {
  return (
    <>


    <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services/:idkey' element={<ServiceCommon/>} />
        <Route path='/join/:idjoin' element={<Joinus/>} />
      </Routes>


    </>
  )
}

export default App
