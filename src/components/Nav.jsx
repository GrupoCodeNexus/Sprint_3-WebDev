import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'
import logo from '../assets/loog.png'

const Nav = () => {
  return (
    <>
    <div className="c-nav">
      <img src={logo} alt="Logo" width='40px'/>
      <Link to="/Home" className="nav-link">Home</Link>
      <Link to="/Problema" className="nav-link">Problema Abordado</Link>
      <Link to="/Solucao" className="nav-link">Nossa Solução</Link>
    </div>
    </>
  )
}

export default Nav
