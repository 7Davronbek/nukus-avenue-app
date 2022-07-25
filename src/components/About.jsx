import React from 'react'

const About = () => {
    return (
        <>
            <div className="About">
                <div className="container">
                    <div className="row ">
                        <div className="col-12 d-lg-flex justify-content-between">
                            <div className="about_h">
                                О нас
                            </div>
                            <div>
                                <div className="about_p">
                                    Компания «BEST HOUSE» успешно занимается реализацией проектов в сфере недвижимости и строительства. На данный момент, одним из самых значимых проектов нашей компании является жилой комплекс «Nukus Avenue» в  Яккасарайском районе столицы Узбекистана. Этот жилой комплекс позволит обладателям квартир в нем обрести уютную жизнь! Комфорт и удобство обеспечены вам, ведь квартиры в жилом комплексе «Nukus Avenue» уникальны по своей планировке и каждый сможет выбрать то, что по душе.
                                </div>
                                <a href='' className="about_a">
                                    <div className="about_l">Подробнее</div>
                                    <div ><img src="/image/line.png" alt="" /></div>
                                </a>
                            </div>
                        </div>
                      
                    </div>
                    <div className="row mt-5">
                        <img className='w-100' src="/image/about.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About