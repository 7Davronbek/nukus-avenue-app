import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutHeader = () => {
    const {t} = useTranslation();
  return (
    <div className='AboutHeader'>
        <div className="container">
            <div className="row align-items-center about_box">
                <div className="col-lg-6 myCol">
                    <div className="cards">
                        <h1>{t('our_outlook_on_life')}</h1>
                        <p>{t('our_outlook_on_life_text')}</p>
                    </div>
                    <div className="leftImg">
                        <img src="/image/header_b.png" alt="" />
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="img">
                        <i><img src="/icon/play.svg" alt="" /></i>
                        <img className='w-100' src="/image/headerVideo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutHeader