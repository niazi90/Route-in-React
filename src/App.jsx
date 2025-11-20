
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

import Error404 from './pages/error/Error404'
import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'
import Product from './pages/product/Product'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
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
