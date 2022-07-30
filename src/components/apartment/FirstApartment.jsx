import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const FirstApartment = () => {
    return (
        <div className='FirstApartment' id='one'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-lg-4 myCol">
                                <h1>План и планировка</h1>
                                <h2>Одна <br /> комната</h2>
                                <h3>Общая площядь: <strong>49,8 м2</strong></h3>

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
                                        <div className="img"><a href={`/image/oneRoom1.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/oneRoom1.jpg`} className='w-100' /></a></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img"><a href={`/image/oneRoom2.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/oneRoom2.jpg`} className='w-100' /></a></div>
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

export default FirstApartment