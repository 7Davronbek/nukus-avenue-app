import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Footer = ({ modal, setModal }) => {
    const location = useLocation()
    return (
        <>
            {location.pathname === '/contacts' ? '' :
                <div className="Footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 footer_head">
                                <div className="footer_phone">Телефон</div>
                                <a href='tel:+998555000355' className="footer_number">+998 55 500 03 55</a>
                                <br />
                                {/* <a href='' className="footer_number_2">+998 (95) 341-22-22</a> */}
                                <div className="footer_mail">Почта</div>
                                <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@besthouse.uz' className="footer_mail_p">info@besthouse.uz</a>

                                <div className="soc">
                                    <a target={'_blank'} rel="noreferrer" className='ms-2 ms-lg-0 me-2 me-lg-0' href="https://www.facebook.com/nukus.avenue.tm/"><img src="/image/facebook.png" alt="" /></a>
                                    <a target={'_blank'} rel="noreferrer" className='ms-2 ms-lg-0 me-2 me-lg-0' href="https://www.instagram.com/nukus.avenue.tm/"><img src="/image/instagram.png" alt="" /></a>
                                    <a target={'_blank'} rel="noreferrer" className='ms-2 ms-lg-0 me-2 me-lg-0' href="https://t.me/nukus_avenue"><img src="/image/telegram.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-lg-6 footer_head d-flex flex-column align-items-center">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="footer_box">
                                            <Link to='/' className='footer_box_a'>Главная</Link>
                                            <Link to='/about-us' className='footer_box_a'>О нас</Link>
                                            <Link to='/selection-of-apartment' className='footer_box_a'>Подбор квартир</Link>
                                            <Link to='/contacts' className='footer_box_a'>Контакты</Link>
                                            <Link to='/complexes' className='footer_box_a'>Жилые комплексы</Link>
                                        </div>
                                    </div>
                                </div>

                                <button onClick={() => setModal(true)} style={{ cursor: 'pointer' }} className='footer_send' href="">Оставить заявку</button>


                            </div>
                            <div className="col-lg-3 footer_head d-flex flex-column justify-content-end align-items-end">
                                <img className='text-end' src="/image/footer_logo.png" alt="" />
                                <div className="footer_address_h">Отдел продаж</div>
                                <div className="footer_address_p">г. Ташкент, Яккасарайский район, улица Глинка-48</div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default Footer