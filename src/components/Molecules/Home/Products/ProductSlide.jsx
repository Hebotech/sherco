import React from 'react';

export default function ProductSlide({ isActive, product, infoState }) {
  const toggleInfoState = () => {
    infoState.last === true ? infoState.set(false) : infoState.set(true);
  };

  return (
    <>
      <h1>{product.titles}</h1>
      <img className='img-fluid' src={product.images[0]} alt='' />
      {isActive ? (
        <button
          className={!infoState.last ? '' : 'open'}
          onClick={toggleInfoState}
        >
          {!infoState.last ? 'Abrir información' : 'Cerrar información'}
        </button>
      ) : (
        ''
      )}
    </>
  );
}
