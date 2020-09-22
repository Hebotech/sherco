import React from 'react';
import Product from 'Molecules/Home/Product';

import { products } from '../../../data/Products';

function ProductsExperience() {
  return (
    <div className='container-fluid'>
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
      {products.map((product, productIndex) => (
        <Product product={product} key={productIndex} />
      ))}
    </div>
  );
}

export default ProductsExperience;
