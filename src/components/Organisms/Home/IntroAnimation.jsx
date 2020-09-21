import React, { useEffect } from 'react';

import { TweenLite } from 'gsap';

import TextAnimation from 'Molecules/Home/TextAnimation.jsx';

export default function IntroAnimation() {
  useEffect(() => {
    TweenLite.from('.intro-animation h1', {
      opacity: 0,
      duration: 2,
      scale: 0.4,
    });
  }, []);

  return (
    <div className='intro-animation'>
      <TextAnimation />
    </div>
  );
}
