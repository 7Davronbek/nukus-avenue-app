import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper";
import { useTranslation } from 'react-i18next';

const SecondApartment = ({setModal}) => {
    const {t} = useTranslation();
    return (
        <div className='FirstApartment SecondApartment' id='second'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-lg-4 myCol">
                                <h1>{t('first_apartment_1')}</h1>
                                <h2>{t('second_apartment_1')}<br /> {t('first_apartment_3')}</h2>
                                <h3>{t('first_apartment_4')}  <strong>60.4 м2</strong></h3>

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
                                        <div className="img"><a href={`/image/twoRoom1.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/twoRoom1.jpg`} className='w-100' /></a></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img"><a href={`/image/twoRoom2.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/twoRoom2.jpg`} className='w-100' /></a></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img"><a href={`/image/twoRoom3.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/twoRoom3.jpg`} className='w-100' /></a></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img"><a href={`/image/twoRoom4.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/twoRoom4.jpg`} className='w-100' /></a></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img"><a href={`/image/twoRoom4.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/twoRoom4.jpg`} className='w-100' /></a></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img"><a href={`/image/twoRoom5.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/twoRoom5.jpg`} className='w-100' /></a></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img"><a href={`/image/twoRoom6.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/twoRoom6.jpg`} className='w-100' /></a></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img"><a href={`/image/twoRoom7.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/twoRoom7.jpg`} className='w-100' /></a></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img"><a href={`/image/twoRoom8.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/twoRoom8.jpg`} className='w-100' /></a></div>
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

export default SecondApartment