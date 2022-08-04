import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import { Pagination, Navigation } from "swiper";

const ThirdApartment = ({setModal}) => {
    return (
        <div className='FirstApartment SecondApartment' id='third'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-lg-4 myCol">
                                <h1>План и планировка</h1>
                                <h2>Трёх <br /> комната</h2>
                                <h3>Общая площядь:  <strong>69.7 м2</strong></h3>

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