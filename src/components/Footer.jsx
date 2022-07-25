import React from 'react'

const Footer = () => {
    return (
        <>
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
                                <a target={'_blank'} rel="noreferrer" className='ms-2 ms-lg-0 me-2 me-lg-0' href="fb.com/nukus.avenue.tm"><img src="/image/facebook.png" alt="" /></a>
                                <a target={'_blank'} rel="noreferrer" className='ms-2 ms-lg-0 me-2 me-lg-0' href="Intagram.com/nukus.avenue.tm"><img src="/image/instagram.png" alt="" /></a>
                                <a target={'_blank'} rel="noreferrer" className='ms-2 ms-lg-0 me-2 me-lg-0' href="https://t.me/nukus_avenue"><img src="/image/telegram.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6 footer_head d-flex flex-column align-items-center">
                            <div className="col-12">
                                <div className="row">
                                    <div className="footer_box">
                                        <a className='footer_box_a' href="">Главная</a>
                                        <a className='footer_box_a' href="">О нас</a>
                                        <a className='footer_box_a' href="">Подбор квартир</a>
                                        <a className='footer_box_a' href="">Контакты</a>
                                        <a className='footer_box_a' href="">Жилые комплексы</a>
                                    </div>
                                </div>
                            </div>

                            <a className='footer_send' href="">Оставить заявку</a>


                        </div>
                        <div className="col-lg-3 footer_head d-flex flex-column justify-content-end align-items-end">
                            <img className='text-end' src="/image/footer_logo.png" alt="" />
                            <div className="footer_address_h">Отдел продаж</div>
                            <div className="footer_address_p">г. Ташкент, Яккасарайский район, улица Глинка-48</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer