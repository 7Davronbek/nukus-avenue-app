import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const SecondApartment = () => {
    return (
        <div className='FirstApartment SecondApartment' id='second'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-lg-4 myCol">
                                <h1>План и планировка</h1>
                                <h2>Двух <br /> комната</h2>
                                <h3>Общая площядь:  <strong>60.4 м2</strong></h3>

                                <button className="btn myBtn">Оставить заявку</button>
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