import React from 'react';

import IntroAnimation from 'Organisms/Home/IntroAnimation';

export default function HeroHeader({
  featuresRef,
  animationStatus,
  brandInfo,
}) {
  return (
    <>
      <IntroAnimation
        featuresRef={featuresRef}
        animationStatus={animationStatus}
      />
      <div
        className='row m-0 _hero-header justify-content-between'
        style={{
          backgroundImage: `linear-gradient(
        0deg,
        rgba(0, 0, 0, 80) 0%,
        rgba(0, 0, 0, 0.01) 100%
      ),
      ${
        brandInfo
          ? 'url(' + brandInfo.image.src + ')'
          : 'radial-gradient(circle, rgba(13,8,168,1) 0%, rgba(13,8,168,1) 100%)'
      }`,
        }}
      >
        <div className='col-md-6 text-left _title'>
          {/* <h2>
            <span>🚀</span>
            <span>🤖</span>
            <span>💸 </span>
          </h2> */}
        </div>

        <div className='col-md-6 col-12 text-md-right text-center _title'>
          <h2 className='mr-md-4'>
            AN EMOTION IS BORN
            <br />
            🇲🇽 In México
          </h2>
        </div>
      </div>
    </>
  );
}
