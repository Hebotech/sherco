import React from 'react';

import IntroAnimation from 'Organisms/Home/IntroAnimation';

export default function HeroHeader({ featuresRef }) {
  return (
    <>
      <IntroAnimation featuresRef={featuresRef} />
      <div className='row m-0 _hero-header'>
        <div className='col-12 text-right _title'>
          <h2>
            AN EMOTION IS BORN
            <br />
            🇲🇽 In México
          </h2>
        </div>
      </div>
    </>
  );
}
