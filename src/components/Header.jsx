import React from 'react'

const Header = ({ modal, setModal }) => {
    return (
        <>
            <div className="Header">
                <img className='header_img' src="/image/header.png" alt="" />
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-6 header_box">
                            <img src="/image/header_b.png" alt="" className="header_back" />
                            <div className="header_h">
                                Выбери квартиру своей мечты
                            </div>
                            <div className="header_p">
                                В нашем комплексе в сё продумано до мелочей
                            </div>
                            <button style={{ backgroundColor: "transparent", cursor: 'pointer' }} onClick={() => setModal(true)} className="header_a">
                                Оставить заявку
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header