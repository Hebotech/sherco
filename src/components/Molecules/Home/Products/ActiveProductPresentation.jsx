import React, { useState, useRef, useEffect } from 'react';

import ProductCarousel from 'Molecules/Home/Products/ProductCarousel';

import ProductActionAnimation from 'Atoms/ProductIconAnimation';

import { gsap } from 'gsap';
import MorphSVGPlugin from 'Utilities/MorphSvg';

export default function ActiveProductPresentation({ product, options }) {
  let [carouselContent, setCarouselContent] = useState('product');

  let activeProductRef = useRef(null);
  let galleryIconRef = useRef(null);
  let productIconRef = useRef(null);

  gsap.registerPlugin(MorphSVGPlugin);

  const openAnimation = (ref, index) => {};

  const morphAnimation = (content) => {
    if (content === 'product') {
      gsap.to(
        galleryIconRef.current,
        0.9,
        {
          morphSVG: productIconRef.current,
          ease: 'power2',
          stroke: 'none',
        },
        '-=1'
      );
    } else {
      gsap.to(
        galleryIconRef.current,
        0.9,
        {
          morphSVG: galleryIconRef.current,
          ease: 'power2',
          stroke: 'none',
        },
        '-=1'
      );
    }
  };

  useEffect(() => {
    if (options.productIndex === 0) {
    }
    let tl = new gsap.timeline();

    tl.fromTo(
      'options.nonActiveProductRef.current',
      {
        duration: 5,
        filter: 'blur(100px)',
        ease: 'power4',
      },
      {
        filter: 'blur(0px)',
        left: 0,
      }
    ).from(
      activeProductRef.current,
      {
        marginLeft: '-20%',
        translateX: options.productIndex !== 0 ? 100 : '-100',
        duration: 0.5,
        ease: 'power2',
      },
      '-=.5'
    );
  }, []);

  const handleClickIcon = () => {
    morphAnimation(carouselContent);
    if (carouselContent === 'product') {
      return setCarouselContent('gallery');
    } else {
      return setCarouselContent('product');
    }
  };

  return (
    <div
      ref={activeProductRef}
      className={`row m-0 _product_presentation flex-column-reverse ${
        options.productIndex === 0 ? 'flex-md-row' : 'flex-md-row-reverse'
      }`}
    >
      <div className='col-md-3 col-12'>
        <h5>Información</h5>
        <ul>
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div
          className={`_cta-wrapper mb-3 d-flex flex-column align-self-center ${
            options.productIndex % 2 === 0
              ? 'align-items-md-start'
              : 'align-items-md-end'
          }`}
        >
          <ProductActionAnimation
            handleClick={handleClickIcon}
            refIcons={{ galleryIconRef, productIconRef }}
          />
          <button className='__cta d-inline' onClick={handleClickIcon}>
            Ver {carouselContent === 'gallery' ? 'producto' : 'galería'}
          </button>
        </div>
      </div>
      <div className='col-md-9 col-12'>
        {carouselContent === 'product' ? (
          <ProductCarousel
            key={carouselContent}
            content={carouselContent}
            images={product.images}
            name={product.titles}
          />
        ) : (
          <ProductCarousel
            key={carouselContent}
            content={carouselContent}
            images={product.gallery}
            name={product.titles}
          />
        )}
      </div>
    </div>
  );
}
