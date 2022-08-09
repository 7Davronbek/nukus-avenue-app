import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, Link } from 'react-router-dom'

const Footer = ({ modal, setModal }) => {
    const { t } = useTranslation()
    const location = useLocation()
    return (
        <>
            {location.pathname === '/contacts' ? '' :
                <div className="Footer foter">
                    <div className="container fot">
                        <div className="row kun">
                            <div className="col-lg-3 footer_head">
                                <div className="footer_phone">{t('footer_1')}</div>
                                <a href='tel:+998555000355' className="footer_number">+998 55 500 03 55</a>
                                <br />
                                <div className="footer_mail">{t('footer_2')}</div>
                                <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@besthouse.uz' className="footer_mail_p">info@besthouse.uz</a>

                                <div className="soc">
                                    <a target={'_blank'} rel="noreferrer" className='ms-2 ms-lg-0 me-2 me-lg-0' href="https://www.facebook.com/nukus.avenue.tm/"><img src="/image/facebook.png" alt="" /></a>
                                    <a target={'_blank'} rel="noreferrer" className='ms-2 ms-lg-0 me-2 me-lg-0' href="https://www.instagram.com/nukus.avenue.tm/"><img src="/image/instagram.png" alt="" /></a>
                                    <a target={'_blank'} rel="noreferrer" className='ms-2 ms-lg-0 me-2 me-lg-0' href="https://t.me/nukus_avenue"><img src="/image/telegram.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-lg-6 footer_head d-flex flex-column align-items-center salom">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="footer_box">
                                            <Link to='/' className='footer_box_a'>{t('footer_3')}</Link>
                                            <Link to='/about-us' className='footer_box_a'>{t('footer_4')}</Link>
                                            <Link to='/selection-of-apartment' className='footer_box_a'>{t('footer_5')}</Link>
                                            <Link to='/contacts' className='footer_box_a'>{t('footer_6')}</Link>
                                            <Link to='/complexes' className='footer_box_a'>{t('footer_7')}</Link>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => setModal(true)} style={{ cursor: 'pointer' }} className='footer_send' href="">{t('footer_8')}</button>
                            </div>
                            <div className="col-lg-3 footer_head d-flex flex-column justify-content-end align-items-end">
                                <img className='text-end' src="/image/footer_logo.png" alt="" />
                                <div className="footer_address_h">{t('footer_9')}</div>
                                <div className="footer_address_p">{t('footer_10')}</div>
                            </div>
                        </div>
                    </div>
                </div>}

            <div className="koko">
                <a target={'_blank'} rel="noreferrer" href="https://kokoagency.uz/#/">© 2022 NUKUS AVENUE by <span>kOkO Digital Agency</span></a>
            </div>
        </>
    )
}

export default Footer