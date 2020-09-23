import React, { useState } from 'react';

import { products } from '../../../data/Products';

import ProductHome from 'Molecules/Home/Products/ProductHome';

function ProductsExperience() {
  const [motorcycleOpen, setMotorcycleOpen] = useState(false);

  const toggleMotorcycleOpen = () => {
    motorcycleOpen === true
      ? setMotorcycleOpen(false)
      : setMotorcycleOpen(true);
  };

  return (
    <div className='container-fluid align-items-center product-experience'>
      <div className='row justify-content-center justify-content-md-around mt-5 mb-5 m-0'>
        {products.map((product, productIndex) => (
          <ProductHome
            key={productIndex}
            product={product}
            toggleMotorcycleOpen={toggleMotorcycleOpen}
            motorcycleOpen={motorcycleOpen}
            productIndex={productIndex}
          />
        ))}
        <div className='col-6 swiperr'></div>
      </div>
    </div>
  );
}

export default ProductsExperience;
