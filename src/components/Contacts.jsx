import React from 'react'
import { useTranslation } from 'react-i18next'

const Contacts = ({ setModal }) => {
    const {t} = useTranslation();
    return (
        <>
            <div className="Contacts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contact_name">{t('con_1')}</div>
                            <a href='tel:+998978832222' className="contact_num">+998 (97) 883-22-22 </a>
                            <br />
                            <a href='tel:+998953412222' className="contact_num">+998 (95) 341-22-22 </a>
                            <div className="address_name">{t('con_2')}</div>
                            <div className="address_loc">{t('con_3')}</div>
                            <a target={'_blank'} rel="noreferrer" href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@besthouse.uz' className="address_mail">info@besthouse.uz</a>
                            <div className="contact_icons">
                                <a target={'_blank'} rel="noreferrer" className='contact_img' href="https://t.me/nukus_avenue"><img src="/image/teleg.png" alt="" /></a>
                                <a target={'_blank'} rel="noreferrer" className='contact_img' href="https://www.instagram.com/nukus.avenue.tm/"><img src="/image/insta.png" alt="" /></a>
                                <a target={'_blank'} rel="noreferrer" className='contact_img' href="https://www.facebook.com/nukus.avenue.tm/"><img src="/image/face.png" alt="" /></a>
                            </div>
                            <button style={{ backgroundColor: "transparent" }} onClick={() => setModal(true)} className='contact_a' href="">{t('con_4')}</button>
                        </div>
                        <div className="col-lg-7">
                            <iframe className="con_iframe w-100 h-100" title="Location"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11992.633756684096!2d69.2651708!3d41.2836561!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf6c2bbfec771d9a0!2z0JbQmiAiTnVrdXMgQXZlbnVlIiDQntGE0LjRgSDQv9GA0L7QtNCw0LY!5e0!3m2!1sru!2s!4v1659765603636!5m2!1sru!2s"
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