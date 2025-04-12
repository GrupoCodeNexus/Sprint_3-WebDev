// importando rotas e componentes necessárias
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Error from './routes/Error'
import Login from './routes/Login'
import Home from './routes/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Problema from './routes/Problema'
import Solucao from './routes/Solucao'

const App = () => {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path="*" element={<Error/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Problema" element={<Problema/>}/>
        <Route path="/Solucao" element={<Solucao/>}/>
      </Routes>
      <Footer/> 
    </Router>  
    </>
)
}

export default App