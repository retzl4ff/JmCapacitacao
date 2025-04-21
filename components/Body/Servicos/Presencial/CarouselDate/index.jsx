import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import React from "react";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Calendary from "./Calendary";

const currentDate = new Date();
const nextMonth = new Date(
  currentDate.getMonth() < 11
    ? currentDate.getFullYear()
    : currentDate.getFullYear() + 1,
  currentDate.getMonth() < 11 ? currentDate.getMonth() + 1 : 0,
  1
);

function CarouselDate() {
  return (
    <Swiper
      effect="coverflow"
      modules={[Pagination, EffectCoverflow, Navigation]}
      pagination={{ clickable: true }}
      navigation={true}
      slidesPerView={1}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 200,
        scale: 1,
        modifier: 1,
        slideShadows: false,
      }}
    >
      <SwiperSlide key="current_month_agenda" className="px-5 pb-5">
        <Calendary date={currentDate} />
      </SwiperSlide>
      <SwiperSlide key="next_month_agenda" className="px-5 pb-5">
        <Calendary date={nextMonth} />
      </SwiperSlide>
    </Swiper>
  );
}

export default React.memo(CarouselDate);
