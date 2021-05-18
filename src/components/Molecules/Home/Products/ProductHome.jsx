import React, { useState, useRef, lazy, Suspense } from 'react';

const ActiveProductPresentation = lazy(() =>
  import(
    /* webpackChunkName: "active-product" */
    'Molecules/Home/Products/ActiveProductPresentation'
  )
);

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
          <h3>{product.name}</h3>
          <Suspense
            fallback={
              <div class='spinner-border text-primary' role='status'>
                <span class='sr-only'>Loading...</span>
              </div>
            }
          >
            <ActiveProductPresentation
              options={{ motorcycleOpen, handleButton, productIndex }}
              product={product}
            />
          </Suspense>
        </>
      ) : (
        <>
          {motorcycleOpen ? (
            <h5 className='mt-md-0 mt-5'>{product.name}</h5>
          ) : (
            <h3 className='mt-md-0 mt-5'>{product.name}</h3>
          )}

          <img
            className='img-fluid'
            src={product.images[0].src}
            alt={`Sherco México ${product.name}`}
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
