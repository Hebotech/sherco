import React from 'react';

import IntroAnimation from 'Organisms/Home/IntroAnimation';

export default function HeroHeader() {
  return (
    <div className='row m-0 _hero-header'>
      <div className='col-12'>
        <h1>SHERCO MÉXICO</h1>
        <h1>AN EMOTION IS BORN</h1>
      </div>
      <IntroAnimation />
    </div>
  );
}
