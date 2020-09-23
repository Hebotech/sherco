import React from 'react';

import ProductSlide from 'Molecules/Home/Products/ProductSlide';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Scrollbar,
  EffectFade,
  Mousewheel,
} from 'swiper';

import 'swiper/components/navigation/navigation.scss';

import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, EffectFade, Mousewheel, Scrollbar]);

export default function ProductCarousel({ images, name }) {
  return (
    <Swiper
      effect='fade'
      speed={0.01}
      freeMode={true}
      freeModeMomentum={false}
      freeModeMinimumVelocity={0.01}
      freeModeMomentumRatio={0.3}
      freeModeSticky={false}
      freeModeMomentumBounce={false}
      scrollbar={{ draggable: true, dragSize: 100 }}
      navigation
      loop={true}
    >
      {images.map((images, imagesIndex) => (
        <SwiperSlide className='text-center' key={imagesIndex}>
          {({ isActive }) => (
            <ProductSlide isActive={isActive} image={images} name={name} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
