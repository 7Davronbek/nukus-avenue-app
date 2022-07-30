import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-2">
              <Link className='nav_logo' to="/"><img className='w-100' src="/image/Logo.png" alt="" /></Link>
            </div>
            <div className="col-9 d-flex justify-content-center">
              <Link className={`nav_a ${location.pathname === '/' ? 'active' : ''}`} to="/">Главная</Link>
              <Link className={`nav_a ${location.pathname === '/about-us' ? 'active' : ''}`} to="/about-us">О нас</Link>
              <Link className={`nav_a ${location.pathname === '/selection-of-apartment' ? 'active' : ''}`} to="/selection-of-apartment">Подбор квартир</Link>
              <Link className={`nav_a ${location.pathname === '/contacts' ? 'active' : ''}`} to="/contacts">Контакты</Link>
              <Link className={`nav_a ${location.pathname === '/complexes' ? 'active' : ''}`} to="/complexes">Жилые комплексы</Link>
            </div>
            <div className="col-1">
              <div className="nav_li">
                <a className='nav_li_a active ' href="">Ру</a>
                <a className='nav_li_a ' href="">Uz</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar