import React from 'react'

const Contacts = () => {
    return (
        <>
            <div className="Contacts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contact_name">Контакты</div>
                            <a href='tel:+998978832222' className="contact_num">+998 (97) 883-22-22 </a>
                            <br />
                            <a href='tel:+998953412222' className="contact_num">+998 (95) 341-22-22 </a>
                            <div className="address_name">Отдел продаж</div>
                            <div className="address_loc">г. Ташкент, Яккасарайский район, улица Глинка-48</div>
                            <a target={'_blank'} rel="noreferrer" href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@besthouse.uz' className="address_mail">info@besthouse.uz</a>
                            <div className="contact_icons">
                                <a target={'_blank'} rel="noreferrer" className='contact_img' href=""><img src="/image/teleg.png" alt="" /></a>
                                <a target={'_blank'} rel="noreferrer" className='contact_img' href=""><img src="/image/insta.png" alt="" /></a>
                                <a target={'_blank'} rel="noreferrer" className='contact_img' href=""><img src="/image/face.png" alt="" /></a>
                            </div>
                            <a className='contact_a' href="">Оставить заявку</a>
                        </div>
                        <div className="col-lg-7">
                            <iframe className="con_iframe w-100 h-100" title="Location"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11987.753575795668!2d69.3078109!3d41.3102038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa193c5c2e7c5a340!2sKoko%20Digital%20Agency!5e0!3m2!1sru!2s!4v1644222387048!5m2!1sru!2s"
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts