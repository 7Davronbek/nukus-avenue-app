import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const SecondApartment = () => {
    return (
        <div className='FirstApartment SecondApartment' id='one'>
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
                                        <div className="img">
                                            <img src="/image/oneRoom1.jpg" alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img">
                                            <img src="/image/oneRoom2.jpg" alt="" />
                                        </div>
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