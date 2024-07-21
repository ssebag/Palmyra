import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import BestProgram from './pages/BestProgram'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
    <>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />  
        <Route path="/best-program" element={<BestProgram />} />  
     </Routes>
     <Footer />  
    </>
  )
}

export default App
