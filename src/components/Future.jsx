import React from 'react'
import { useTranslation } from 'react-i18next'

const Future = () => {
    const {t} = useTranslation();
    return (
        <>
            <div className="Future">
                <div className="container">
                    <div className="row fut">
                        <div className="col-12 d-lg-block d-flex flex-column align-items-center">
                            <div className="row  fut">
                                <div className="col-lg-12 ">
                                    <img className='future_img' src="/image/fut_1.png" alt="" />
                                    <div className="fut_name">{t('future_1')}</div>
                                    <div className="fut_text">{t('future_2')}</div>
                                    <a className='fut_box' href="tel: +998 55 500 03 55">
                                        <div className="fut_a">
                                        {t('future_3')}
                                            <img className='fut_l' src="/image/line.png" alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 fut_box_down">
                            <div className="row  fut">
                                <div className="col-lg-12 ">
                                    <img className='future_img' src="/image/fut_2.png" alt="" />
                                    <div className="fut_name">{t('future_4')}</div>
                                    <div className="fut_text">{t('future_5')}</div>
                                    <a className='fut_box' href="tel: +998 55 500 03 55">
                                        <div className="fut_a">
                                        {t('future_3')}
                                            <img className='fut_l' src="/image/line.png" alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Future