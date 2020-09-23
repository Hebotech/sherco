import React from 'react';

export default function ProductSlide({ isActive, image, name }) {
  return (
    <>
      <img className={`img-fluid`} src={image} alt={`Sherco México ${name}`} />
    </>
  );
}
