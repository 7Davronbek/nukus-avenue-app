import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";


import { Pagination, Navigation } from "swiper";
import { useTranslation } from 'react-i18next';

const ThirdApartment = ({setModal}) => {
    const {t} = useTranslation();
    return (
        <div className='FirstApartment SecondApartment' id='third'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-lg-4 myCol">
                                <h1>{t('first_apartment_1')}</h1>
                                <h2>{t('third_apartment_1')} <br /> {t('first_apartment_3')}</h2>
                                <h3>{t('first_apartment_4')} <strong>69.7 м2</strong></h3>

                                <button onClick={() => setModal(true)} className="btn myBtn">{t('first_apartment_5')}</button>
                            </div>

                            <div className="col-lg-8">
                                <Swiper
                                    pagination={{
                                        type: "fraction",
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="img"><a href={`/image/thirdRoom1.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/thirdRoom1.jpg`} className='w-100' /></a></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img"><a href={`/image/thirdRoom2.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/thirdRoom2.jpg`} className='w-100' /></a></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img"><a href={`/image/thirdRoom3.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/thirdRoom3.jpg`} className='w-100' /></a></div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdApartment