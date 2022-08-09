import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import { Pagination, Navigation } from "swiper";

const FourthApartment = ({ setModal }) => {
    return (
        <div className='FirstApartment SecondApartment' id='fourth'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-lg-4 myCol">
                                <h1>План и планировка</h1>
                                <h2>Четырёх <br /> комната</h2>
                                <h3>Общая площядь:  <strong>94.4 м2</strong></h3>

                                <button onClick={() => setModal(true)} className="btn myBtn">Оставить заявку</button>
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
                                        <div className="img"><a href={`/image/fourRoom1.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/fourRoom1.jpg`} className='w-100' /></a></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img"><a href={`/image/fourRoom3.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/fourRoom3.jpg`} className='w-100' /></a></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img"><a href={`/image/fourRoom2.jpg`} data-fancybox="gallery" ><img alt='Nukus Avenue' src={`/image/fourRoom2.jpg`} className='w-100' /></a></div>
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

export default FourthApartment