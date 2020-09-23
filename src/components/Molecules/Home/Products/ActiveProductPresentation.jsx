import React from 'react';

import ProductCarousel from 'Molecules/Home/Products/ProductCarousel';

export default function ActiveProductPresentation({ product, options }) {
  return (
    <>
      <button
        className={!options.motorcycleOpen ? '' : 'open'}
        onClick={options.handleButton}
      >
        {!options.motorcycleOpen ? 'Abrir información' : 'Cerrar información'}
      </button>

      <ProductCarousel images={product.images} name={product.titles} />
    </>
  );
}
