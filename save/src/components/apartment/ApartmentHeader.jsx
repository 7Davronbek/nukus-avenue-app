import React from 'react'

const ApartmentHeader = () => {
  return (
    <div className='ApartmentHeader'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Подбор квартир</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">

              <div className="col-lg-3">
                <a href='#one' className="cards">
                  <div className="img">
                    <img src="/image/apartment1.png" alt="" />
                    <h3>Подробнее</h3>
                  </div>
                  <h2>Одна комнатная квартира</h2>
                </a>
              </div>

              <div className="col-lg-3">
                <a href='#second' className="cards">
                  <div className="img">
                    <img src="/image/apartment2.png" alt="" />
                    <h3>Подробнее</h3>
                  </div>
                  <h2>Двух комнатные квартиры</h2>
                </a>
              </div>

              <div className="col-lg-3">
                <a href='#third' className="cards">
                  <div className="img">
                    <img src="/image/apartment3.png" alt="" />
                    <h3>Подробнее</h3>
                  </div>
                  <h2>Трех комнатная квартира</h2>
                </a>
              </div>

              <div className="col-lg-3">
                <a href='#fourth' className="cards">
                  <div className="img">
                    <img src="/image/apartment4.png" alt="" />
                    <h3>Подробнее</h3>
                  </div>
                  <h2>Четырёх комнатная квартира</h2>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApartmentHeader