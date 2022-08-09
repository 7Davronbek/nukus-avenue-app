import React from 'react'

const Future = () => {
    return (
        <>
            <div className="Future">
                <div className="container">
                    <div className="row fut">
                        <div className="col-12 d-lg-block d-flex flex-column align-items-center">
                            <div className="row  fut">
                                <div className="col-lg-12 ">
                                    <img className='future_img' src="/image/fut_1.png" alt="" />
                                    <div className="fut_name">Рассрочка</div>
                                    <div className="fut_text">Успей купить квартиру в жилом комплексе «Nukus Avenue» в рассрочку! *Рассрочка действует в течение 12 месяцев.</div>
                                    <a className='fut_box' href="tel: +998 55 500 03 55">
                                        <div className="fut_a">
                                            Позвонить
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
                                    <div className="fut_name">Остались вопросы?</div>
                                    <div className="fut_text">Свяжитесь с нашими специалистами.
                                        Они с удовольствием помогут подобрать наилучший вариант планировки.</div>
                                    <a className='fut_box' href="tel: +998 55 500 03 55">
                                        <div className="fut_a">
                                            Позвонить
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