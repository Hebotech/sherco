import React, { useState, useRef } from 'react';

import ActiveProductPresentation from 'Molecules/Home/Products/ActiveProductPresentation';

export default function ProductHome({
  product,
  toggleMotorcycleOpen,
  motorcycleOpen,
  productIndex,
}) {
  const [activeProduct, setActiveProduct] = useState(false);

  const handleButton = () => {
    toggleMotorcycleOpen();
    activeProduct ? setActiveProduct(false) : setActiveProduct(true);
  };

  return (
    <div
      className={` ${
        activeProduct
          ? productIndex === 0
            ? 'active-product text-md-left text-center col-12  col-md-11'
            : 'active-product text-md-right text-center col-12  col-md-11'
          : motorcycleOpen
          ? 'col-md-1 col-6 text-center align-self-center'
          : 'col-10  col-md-4 text-center'
      }`}
    >
      {activeProduct ? (
        <>
          <h3>{product.titles}</h3>
          <ActiveProductPresentation
            options={{ motorcycleOpen, handleButton }}
            product={product}
          />
        </>
      ) : (
        <>
          {motorcycleOpen ? <p>{product.titles}</p> : <h3>{product.titles}</h3>}

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
