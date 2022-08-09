import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const About = () => {
    const {t} = useTranslation();
    return (
        <>
            <div className="About">
                <div className="container">
                    <div className="row ">
                        <div className="col-12 d-lg-flex justify-content-between">
                            <div className="about_h">
                                {t('about_us')}
                            </div>
                            <div>
                                <div className="about_p">
                                    {t('about_us_text')}
                                </div>
                                <Link to="/about-us" className="about_a">
                                    <div className="about_l">{t('more')}</div>
                                    <div ><img src="/image/line.png" alt="" /></div>
                                </Link>
                            </div>
                        </div>
                      
                    </div>
                    <div className="row mt-5">
                        <img className='w-100' src="/image/about.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About