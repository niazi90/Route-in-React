
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


import About from './Pages/About'
import Contact from './Pages/Contact'


import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'
import Product from './Pages/home/Product'
import Home from './pages/home/home'
import Error404 from './Pages/Error404'





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
