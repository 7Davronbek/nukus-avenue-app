import React from 'react'
import { useTranslation } from 'react-i18next'

const ApartmentHeader = () => {
  const {t} = useTranslation()
  return (
    <div className='ApartmentHeader'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>{t('apartment_header_1')}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">

              <div className="col-lg-3">
                <a href='#one' className="cards">
                  <div className="img">
                    <img src="/image/apartment1.png" alt="" />
                    <h3>{t('apartment_header_1')}</h3>
                  </div>
                  <h2>{t('apartment_header_3')}</h2>
                </a>
              </div>

              <div className="col-lg-3">
                <a href='#second' className="cards">
                  <div className="img">
                    <img src="/image/apartment2.png" alt="" />
                    <h3>{t('apartment_header_1')}</h3>
                  </div>
                  <h2>{t('apartment_header_4')}</h2>
                </a>
              </div>

              <div className="col-lg-3">
                <a href='#third' className="cards">
                  <div className="img">
                    <img src="/image/apartment3.png" alt="" />
                    <h3>{t('apartment_header_1')}</h3>
                  </div>
                  <h2>{t('apartment_header_5')}</h2>
                </a>
              </div>

              <div className="col-lg-3">
                <a href='#fourth' className="cards">
                  <div className="img">
                    <img src="/image/apartment4.png" alt="" />
                    <h3>{t('apartment_header_1')}</h3>
                  </div>
                  <h2>{t('apartment_header_6')}</h2>
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