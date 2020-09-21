import React, { useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap/dist/gsap';
import SplitText from 'gsap/SplitText';

export default function TextAnimation({ titleAnimation }) {
  //  gsap.registerPlugin(SplitText);

  // useEffect(() => {
  //   var juanson = new SplitText(titleAnimation.current, {
  //     type: 'words',
  //   });

  //   gsap
  //     .timeline()
  //     .staggerFrom(
  //       juanson.words,
  //       0.2,
  //       {
  //         opacity: 0,
  //         filter: 'blur(105px)',
  //         translateY: '5em',
  //       },
  //       0.3
  //     )
  //     .to(titleAnimation.current, {
  //       translateY: '-50em',
  //       filter: 'blur(105px)',
  //       delay: 0.4,
  //     });
  // }, []);
  return (
    <>
      <h2 ref={titleAnimation} className='_title_animation'>
        La aventura llegó a México
      </h2>
    </>
  );
}
