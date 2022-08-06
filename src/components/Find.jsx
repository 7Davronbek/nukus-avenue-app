import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import { Pagination, Navigation } from "swiper";

const Find = () => {
    return (
        <>
            <div className="Find">
                <div className="container ">
                    <div className="row align-items-center">
                        <div className="col-lg-5 text-lg-start text-center">
                            <div className="find_h">
                                Подбор квартир
                            </div>
                            <div className="find_p">
                                Подберите квартиру, которая придется по душе и по потребностям.
                            </div>
                            <Link className='find_a' to="/selection-of-apartment">Подробнее</Link>
                        </div>
                        <div className="col-lg-7 mt-5 mt-lg-0">
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
                                    <div className="img"><a href={`/image/twoRoom1.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/oneRoom2.jpg`} className='w-100' /></a></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="img"><a href={`/image/thirdRoom1.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/oneRoom2.jpg`} className='w-100' /></a></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="img"><a href={`/image/fourRoom1.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/oneRoom2.jpg`} className='w-100' /></a></div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Find