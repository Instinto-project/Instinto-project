import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Routes, Route, Navigate } from 'react-router-dom' 
import Homepage from './components/Homepage'
import ProductPage from './components/ProductPage'
{/*import MainPicture from './components/MainPicture'
import Categories from './components/Categories'*/}

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/product" element={<ProductPage />}/>
        {/* <MainPicture/>
        <Categories/> */}

      </Routes>
      <Footer />
    </>
  )
}

export default App
