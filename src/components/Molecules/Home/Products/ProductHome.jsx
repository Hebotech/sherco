import React, { useState, useRef } from 'react';

import ActiveProductPresentation from 'Molecules/Home/Products/ActiveProductPresentation';

export default function ProductHome({
  product,
  toggleMotorcycleOpen,
  motorcycleOpen,
  productIndex,
}) {
  const [activeProduct, setActiveProduct] = useState(false);
  const nonActiveProductRef = useRef(null);

  const handleButton = () => {
    toggleMotorcycleOpen();
    activeProduct ? setActiveProduct(false) : setActiveProduct(true);
  };

  return (
    <div
      ref={nonActiveProductRef}
      className={` ${
        activeProduct
          ? productIndex % 2 === 0
            ? `active-product text-md-left text-center col-12  col-md-11`
            : `active-product text-md-right text-center col-12  col-md-11 `
          : motorcycleOpen
          ? 'col-md-1 col-6 text-center align-self-center'
          : productIndex % 2 === 0
          ? 'col-12 odd-product col-md-4 text-center'
          : 'col-12 even-product col-md-4 text-center'
      }`}
    >
      {activeProduct ? (
        <>
          <h3>{product.titles}</h3>
          <ActiveProductPresentation
            options={{ motorcycleOpen, handleButton, productIndex }}
            product={product}
          />
        </>
      ) : (
        <>
          {motorcycleOpen ? (
            <h5 className='mt-md- mt-5'>{product.titles}</h5>
          ) : (
            <h3 className='mt-md- mt-5'>{product.titles}</h3>
          )}

          <img
            className='img-fluid'
            src={product.images[0]}
            alt={`Sherco México ${product.titles}`}
          />
        </>
      )}

      {(!motorcycleOpen && !activeProduct) ||
      (motorcycleOpen && activeProduct) ? (
        <button
          className={!motorcycleOpen ? '' : 'open'}
          onClick={handleButton}
        >
          {!motorcycleOpen ? 'Abrir información' : 'Cerrar información'}
        </button>
      ) : (
        ''
      )}
    </div>
  );
}
