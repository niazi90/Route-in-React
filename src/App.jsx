
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Error404 from './Pages/Error404'
import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'



function App() {
  return (
    <>
    

      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        {/* dynamic routing */}
        <Route path='/product/:id' element={<Product />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
