import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
{/*import Homepage from './components/Homepage'*/ }
import ProductPage from './components/ProductPage'
{/*import MainPicture from './components/MainPicture'
import Categories from './components/Categories'*/}

function App() {

  return (
    <>
      <NavBar />
      {/*<Homepage />*/}
      <ProductPage />
      <Footer />
      {/* <MainPicture/>
      <Categories/> */}
    </>
  )
}

export default App
