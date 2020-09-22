import React from 'react';

import PropTypes from 'prop-types';

import GalleryImages from 'Molecules/Home/Products/GalleryImages';

function Product({ product: { titles, description, images } }) {
  return (
    <div className='row m-0'>
      <h2>{titles}</h2>
      <div className='col-md-3 col-12'>
        <p>{description}</p>
      </div>
      <div className='col-md-3 col-12'>
        <GalleryImages images={images} />
        {/* <pre>{JSON.stringify(images, null, 2)}</pre> */}
      </div>
    </div>
  );
}

Product.propTypes = {
  product: {
    description: PropTypes.string,
    titles: PropTypes.string,
    images: PropTypes.array,
  },
};

export default Product;
