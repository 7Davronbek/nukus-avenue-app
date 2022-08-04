import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const [navbar, setNavbar] = useState(false)
  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-2 col-md-3 col-6">
              <Link className='nav_logo' to="/"><img className='w-100' src="/image/Logo.png" alt="" /></Link>
            </div>
            <div onClick={() => setNavbar(true)} className="open">open</div>
            <div className={`col-lg-10 d-flex justify-content-end myCol ${navbar ? 'active' : ''}`}>
              <div onClick={() => setNavbar(false)} className="close">close</div>
              <Link className={`nav_a ${location.pathname === '/' ? 'active' : ''}`} to="/">Главная</Link>
              <Link className={`nav_a ${location.pathname === '/about-us' ? 'active' : ''}`} to="/about-us">О нас</Link>
              <Link className={`nav_a ${location.pathname === '/selection-of-apartment' ? 'active' : ''}`} to="/selection-of-apartment">Подбор квартир</Link>
              <Link className={`nav_a ${location.pathname === '/contacts' ? 'active' : ''}`} to="/contacts">Контакты</Link>
              <Link className={`nav_a ${location.pathname === '/complexes' ? 'active' : ''}`} to="/complexes">Жилые комплексы</Link>

              <div className="nav_li">
                <a className='nav_li_a active ' href="">Ру</a>
                <a className='nav_li_a ' href="">Uz</a>
              </div>

            </div>
            {/* <div className="col-1">
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar