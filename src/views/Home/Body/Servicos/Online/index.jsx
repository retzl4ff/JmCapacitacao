/* eslint-disable react/prop-types */
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Button } from 'reactstrap';

function Online({ carouselItems, fadeInClass }) {
  return (
    <>
      <div
        className="servicos-section d-flex flex-column"
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div className="header-servicos d-flex justify-content-center mb-1">
          <span className="text-center">
            Se capacite sem sair do conforto da sua casa!
          </span>
        </div>
        <div className="descricao-servicos d-flex justify-content-center text-center w-100">
          <div className="w-75">
            <p style={{ fontSize: '18px' }}>
              Com a nossa plataforma de treinamentos online você pode fazer os
              nossos cursos de normas regulamentadoras de onde você estiver
            </p>
          </div>
        </div>
      </div>
      <div
        className={`carousel-servicos-section ${fadeInClass}`}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '60%',
        }}
      >
        <Swiper
          effect="coverflow"
          modules={[Pagination, EffectCoverflow, Navigation]}
          pagination={{ clickable: true }}
          navigation={true}
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 75,
            scale: 0.95,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {carouselItems.map(({ imageSrc, description }, index) => (
            <SwiperSlide key={index} className="mb-5">
              <div
                className="d-flex flex-column align-items-center border"
                style={{ borderRadius: '20px' }}
              >
                <img
                  src={imageSrc}
                  alt={description}
                  style={{ width: '100%', borderRadius: '20px 20px 0px 0px' }}
                />
                <div
                  className="p-3 text-center d-flex flex-column justify-content-center align-items-center"
                  style={{ width: '85%' }}
                >
                  <span style={{ fontWeight: '500' }}>{description}</span>
                  <Button className="w-100 mt-1 mb-1 border-0 adquirir-button">
                    Adquirir
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default React.memo(Online);
