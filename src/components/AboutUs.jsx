import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {
    const {t} = useTranslation();
  return (
    <>
    <div className="AboutUs">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="aboutus_h">{t('little')} <br /> «</div>
                </div>
                <div className="col-lg-6">
                <div className="aboutus_p">{t('little_text')}</div>
                </div>
                <div className="col-12">
                    <div className="about_name">
                    {t('about_name')}
                    </div>
                </div>
                <div className="col-12">
                    <div className="about_text">
                    {t('about_text')}
                    </div>
                </div>
                <div className="col-12">
                    <img className='aboutus_img' src="/image/aboutus_1.png" alt="" />
                </div>
                <div className="col-12">
                    <div className="about_desc">
                    {t('about_text_2')}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutUs