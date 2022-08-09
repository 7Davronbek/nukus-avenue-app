import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ changeLang }) => {
  const location = useLocation()
  const [navbar, setNavbar] = useState(false)

  const { t } = useTranslation();

  const changeLanguage = (e) => {
    e.preventDefault();
    changeLang(e.target.value)
  }

  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-2 col-md-3 col-6">
              <Link className='nav_logo' to="/"><img className='w-100' src="/image/Logo.png" alt="" /></Link>
            </div>
            <div onClick={() => setNavbar(true)} className="open"><img src="/icon/burger.svg" alt="" /></div>
            <div className={`col-lg-10 d-flex justify-content-end myCol ${navbar ? 'active' : ''}`}>
              <div onClick={() => setNavbar(false)} className="close"><img src="/icon/burgerClose.svg" alt="" /></div>
              <Link onClick={() => setNavbar(false)} className={`nav_a ${location.pathname === '/' ? 'active' : ''}`} to="/">{t('home')}</Link>
              <Link onClick={() => setNavbar(false)} className={`nav_a ${location.pathname === '/about-us' ? 'active' : ''}`} to="/about-us">{t('about_us')}</Link>
              <Link onClick={() => setNavbar(false)} className={`nav_a ${location.pathname === '/selection-of-apartment' ? 'active' : ''}`} to="/selection-of-apartment">{t('selection_of_apartments')}</Link>
              <Link onClick={() => setNavbar(false)} className={`nav_a ${location.pathname === '/contacts' ? 'active' : ''}`} to="/contacts">{t('contacts')}</Link>
              <Link onClick={() => setNavbar(false)} className={`nav_a ${location.pathname === '/complexes' ? 'active' : ''}`} to="/complexes">{t('residential_complexes')}</Link>

              <div className="nav_li">
                <select className='siteLang form-control' onChange={changeLanguage}>
                  <option value="ru">Ру</option>
                  <option value="uz">Uz</option>
                </select>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
