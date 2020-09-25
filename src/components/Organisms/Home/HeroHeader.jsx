import React from 'react';

import IntroAnimation from 'Organisms/Home/IntroAnimation';

export default function HeroHeader({ featuresRef, animationStatus }) {
  return (
    <>
      <IntroAnimation
        featuresRef={featuresRef}
        animationStatus={animationStatus}
      />
      <div className='row m-0 _hero-header justify-content-between'>
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
