import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import com from "../sedesection/img/com.png"

const Swiperr = () => {
  return (
    <div className="w-full pt-15 pb-15">
      <div className="max-w-[1220px] m-auto pl-3 pr-3 ">
        <div className="w-full text-center pb-8"><h1 className="text-4xl font-bold">What out clients say</h1></div>
        <div>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={com} alt="" /></SwiperSlide>
        <SwiperSlide><img src={com} alt="" /></SwiperSlide>
        <SwiperSlide><img src={com} alt="" /></SwiperSlide>
        <SwiperSlide><img src={com} alt="" /></SwiperSlide>
        <SwiperSlide><img src={com} alt="" /></SwiperSlide>
        <SwiperSlide><img src={com} alt="" /></SwiperSlide>
        <SwiperSlide><img src={com} alt="" /></SwiperSlide>
        <SwiperSlide><img src={com} alt="" /></SwiperSlide>
      </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Swiperr;
