import React from 'react';

import ProductSlide from 'Molecules/Home/Products/ProductSlide';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Scrollbar,
  EffectFade,
  Zoom,
  EffectCube,
} from 'swiper';

import 'swiper/components/navigation/navigation.scss';

import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-cube/effect-cube.scss';
import 'swiper/components/zoom/zoom.scss';
import 'swiper/components/effect-fade';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, EffectFade, Scrollbar, EffectCube, Zoom]);

export default function ProductCarousel({ content, images, name }) {
  return content === 'product' ? (
    <Swiper
      effect='fade'
      speed={0.01}
      freeMode={true}
      freeModeMomentum={false}
      freeModeMinimumVelocity={0.01}
      freeModeMomentumRatio={0.3}
      freeModeSticky={false}
      freeModeMomentumBounce={false}
      zoom={true}
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
  ) : (
    <Swiper
      effect='cube'
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      zoom={true}
      slidesPerView={1}
      navigation
      grabCursor={true}
    >
      {images.map((images, imagesIndex) => (
        <SwiperSlide className='text-center' key={imagesIndex}>
          <img className='img-fluid gallery-image' src={images} alt='' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
