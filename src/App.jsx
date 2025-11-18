
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/nav/navbar'
import Home from './pages/home/home'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Footer from './components/footer/Footer'
import Error404 from './pages/error/error404'

function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Navbar />
   
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
       <Route path="*" element={<Error404 />} />
    </Routes>
     <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
