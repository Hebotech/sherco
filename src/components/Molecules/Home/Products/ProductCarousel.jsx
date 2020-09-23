import React from 'react';

import ProductSlide from 'Molecules/Home/Products/ProductSlide';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectCoverflow } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, EffectCoverflow]);

export default function ProductCarousel({ products, infoState }) {
  return (
    <Swiper
      centeredSlides={true}
      grabCursor={true}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      spaceBetween={50}
      navigation={infoState.last ? false : true}
      slidesPerView={3}
    >
      {products.map((product, productIndex) => (
        <SwiperSlide className='text-center' key={productIndex}>
          {({ isActive }) => (
            <div className={isActive ? 'active-slide' : 'non-active-slide'}>
              <ProductSlide
                isActive={isActive}
                product={product}
                infoState={infoState}
              />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
