import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="row align-items-center justify-content-between">
          <div className="col-2">
            <a className='nav_logo' href=""><img className='w-100' src="/image/Logo.png" alt="" /></a>
          </div>
          <div className="col-9 d-flex justify-content-center">
            <a className='nav_a' href="">Главная</a>
            <a className='nav_a' href="">О нас</a>
            <a className='nav_a' href="">Подбор квартир</a>
            <a className='nav_a' href="">Контакты</a>
            <a className='nav_a' href="">Жилые комплексы</a>
          </div>
          <div className="col-1">
            <div className="nav_li">
              <a className='nav_li_a active ' href="">Ру</a>
              <a className='nav_li_a ' href="">Uz</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar