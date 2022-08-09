import React from 'react'
import { useTranslation } from 'react-i18next';

const Header = ({ modal, setModal }) => {
    const {t} = useTranslation()
    return (
        <>
            <div className="Header">
                <img className='header_img' src="/image/header.png" alt="" />
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-6 header_box">
                            <img src="/image/header_b.png" alt="" className="header_back" />
                            <div className="header_h">
                                {t('choose_your_dream_apartment')}
                            </div>
                            <div className="header_p">
                                {t('in_our_complex_everything_is_thought_out_to_the_smallest_detail')}
                            </div>
                            <button style={{ backgroundColor: "transparent", cursor: 'pointer' }} onClick={() => setModal(true)} className="header_a">
                                {t('submit_your_application')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header