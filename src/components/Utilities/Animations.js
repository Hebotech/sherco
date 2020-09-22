export const introAnimation = (
  tl,
  cb,
  { titleWordsArray, titleAnimation, logoRef, animationRef }
) => {
  return tl
    .staggerFrom(
      titleWordsArray.words,
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
        scale: 1.5,
        duration: 1,
        ease: 'ease-in-out',
      },
      '-=1.2'
    )
    .eventCallback('onComplete', () => cb(true));
};
