import React from 'react'

const Header = ({modal, setModal}) => {
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
                            <buttn onClick={() => setModal(true)} style={{cursor: 'pointer'}} className="header_a">
                                Оставить заявку
                            </buttn>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header