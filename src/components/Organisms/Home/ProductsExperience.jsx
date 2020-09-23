import React, { useState } from 'react';

import Product from 'Molecules/Home/Product';
import ProductCarousel from 'Molecules/Home/Products/ProductCarousel';

import { products } from '../../../data/Products';

function ProductsExperience() {
  let [motorcycleOpen, setMotorcycleOpen] = useState(false);

  return (
    <div className='container-fluid  align-items-center product-experience'>
      <div className='row justify-content-center mt-5 mb-5 m-0'>
        <div className='col-11 swiperr'>
          <ProductCarousel
            products={products}
            infoState={{ set: setMotorcycleOpen, last: motorcycleOpen }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsExperience;
