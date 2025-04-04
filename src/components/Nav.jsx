import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'

const Nav = () => {
  return (
    <>
    <div className="c-nav">
      <Link to="/Home" className="nav-link">Home</Link>
    </div>
    </>
  )
}

export default Nav
