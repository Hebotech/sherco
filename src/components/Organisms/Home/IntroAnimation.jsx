import React, { useEffect, useState, useRef } from 'react';

import { gsap, TweenLite } from 'gsap';
import MorphSVGPlugin from 'Utilities/MorphSvg.js';
import SplitText from 'Utilities/SplitToText.js';
import ScrollTrigger from 'gsap/ScrollTrigger';

import TextAnimation from 'Molecules/Home/TextAnimation.jsx';
import LogoAnimation from 'Molecules/Home/LogoAnimation.jsx';

export default function IntroAnimation(props) {
  gsap.registerPlugin(MorphSVGPlugin, SplitText, ScrollTrigger);

  var logoRef = useRef(null);
  var letterLogoRef = useRef(null);
  var titleAnimation = useRef(null);
  var animationRef = useRef(null);

  var mouse = { x: 0, y: 0 };

  var cx = window.innerWidth / 2;
  var cy = window.innerHeight / 2;

  const [animationFinish, setAnimationFinish] = useState(false);

  const mouseAnimation = (e) => {
    e.persist();
    if (animationFinish) {
      mouse.x = e.pageX;
      mouse.y = e.pageY;

      let dx = mouse.x - cx;
      let dy = mouse.y - cy;

      let tiltx = dy / cy;
      let tilty = -(dx / cx);
      let radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));

      TweenLite.to('._hero-header', 1, {
        backgroundPosition: `${dy * 0.01}px,${dx * 0.01}px`,

        ease: 'Power2.easeOut',
      });
      TweenLite.to(
        '.intro-animation svg',
        0.6,
        {
          translateX: dx * 0.03,
          ease: 'ease-in-out',
          filter: `drop-shadow(${dx * 0.009}px ${dy * 0.009}px 0px #e1ff00
          )`,
        },
        '-=1'
      );

      TweenLite.to(
        '.intro-animation svg',
        1,
        {
          translateY: dy * 0.03,
          dropShadow: '1px 1px 1px black',
          ease: 'power4',
        },
        '-=1'
      );
    }
  };

  useEffect(() => {
    var juanson = new SplitText(titleAnimation.current, {
      type: 'words',
    });

    let tl = gsap.timeline();
    tl.staggerFrom(
      juanson.words,
      0.2,
      {
        opacity: 0,
        filter: 'blur(105px)',
        translateY: '5em',
        ease: 'power4',
      },
      0.3
    )
      .to(titleAnimation.current, {
        translateY: '-20em',
        filter: 'blur(105px)',
        duration: 1,
        delay: 0.4,
      })
      .to(
        logoRef.current,
        0.5,
        {
          morphSVG: letterLogoRef.current,
          ease: 'power1',
          stroke: 'none',
        },
        '-=1'
      )
      .to(animationRef.current, {
        delay: 0.65,
        duration: 1,
        backgroundColor: 'transparent',
        ease: 'power1',
      })
      .to(
        logoRef.current,
        0.5,
        {
          fill: 'white',
        },
        '-=1'
      )
      .to(
        '.intro-animation svg',
        {
          scale: `${window.innerWidth >= 460 ? 1.5 : 1}`,

          duration: 1,
          ease: 'ease-in-out',
        },
        '-=1.2'
      )
      .eventCallback('onComplete', () => {
        setAnimationFinish(true);
        props.animationStatus(true);
      });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-view ._feature',
        start: 'top bottom',
        end: '+=700',
        scrub: true,
      },
    });

    tl2
      .fromTo(
        '._hero-header',
        {
          backgroundSize: '100%',
        },
        {
          backgroundSize: '120%',
          ease: 'ease-in-out',
        }
      )
      .to(
        '.intro-animation svg',
        {
          opacity: 0,
          translateY: '-5em',
          ease: 'ease-in-out',
        },
        '<'
      )
      .from('.home-view ._feature img', {
        ease: 'power1',
        translateX: '-5em',
        translateY: '-5em',
        opacity: 0,
      })
      .addLabel('HeroHeader')
      .fromTo(
        '.home-view ._feature',
        {
          backgroundImage: `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 100) 100%
    )`,
        },
        {
          backgroundImage: `linear-gradient(
      0deg,
        rgba(0, 0, 0, 0)60%,
        rgba(0, 0, 0, 0) 100%
    )`,
          ease: 'power4',
        },
        '<'
      )
      .from('.home-view ._feature .__cta', {
        ease: 'power1',
        translateX: '5em',
        translateY: '5em',
        opacity: 0,
      });
  }, []);

  return (
    <div
      onMouseMove={(e) => mouseAnimation(e)}
      ref={animationRef}
      className='intro-animation'
    >
      <div className='_item text-center'>
        <TextAnimation titleAnimation={titleAnimation} />
      </div>
      <div className='_item _logo'>
        <LogoAnimation letterLogoRef={letterLogoRef} logoRef={logoRef} />
      </div>
    </div>
  );
}
