import React from 'react';
import PropTypes from 'prop-types';

function GalleryImages({ images }) {
  return (
    <div className='card'>
      {images.map((image, imageIndex) => (
        <img
          loading='lazy'
          className='img-fluid'
          key={imageIndex}
          src={image}
          alt='Moto Sherco'
        />
      ))}
    </div>
  );
}

GalleryImages.propTypes = {
  images: PropTypes.array,
};

export default GalleryImages;
