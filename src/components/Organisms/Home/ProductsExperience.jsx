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
    <div className='pt-5 container-fluid align-items-center product-experience'>
      <h2 className='mt-md-5 mb-md-4 text-center'>Nueva colección</h2>
      <div className='row pl-md-5 pr-md-5 justify-content-center justify-content-md-around  m-0'>
        {products.map((product, productIndex) => (
          <ProductHome
            key={productIndex}
            product={product}
            toggleMotorcycleOpen={toggleMotorcycleOpen}
            motorcycleOpen={motorcycleOpen}
            productIndex={productIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsExperience;
