import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const FutureHouse = () => {
    return (
        <div className='FutureHouse'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="fut_h">
                            Взгляните на свой будущий дом
                        </div>
                        <div className="fut_p">
                            Успейте купить квартиру для своей семьи в одном из лучших жилых комплексов Ташкента!
                        </div>
                    </div>
                    <div className="col-12">

                    </div>
                </div>
            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><div className="img"><img src="/image/future2.png" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="img"><img src="/image/future1.png" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="img"><img src="/image/future3.png" alt="" /></div></SwiperSlide>
            </Swiper>

        </div>
    )
}

export default FutureHouse