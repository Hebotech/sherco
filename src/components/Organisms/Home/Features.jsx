import React from 'react';

export default function Features() {
  return (
    <div className='_feature text-center container-fluid'>
      <h2>La nueva experiencia </h2>
      <div className='row m-0 mt-5 text-center justify-content-center align-items-center'>
        <div className='col-md-6  col-12'>
          <img
            className='_image img-fluid'
            src='https://www.sherco.com/wp-content/uploads/FEK7WqZa-600x600.jpg'
            alt=''
          />
          <img
            className='_image img-fluid'
            src='https://www.sherco.com/wp-content/uploads/CDF-07-600x600.jpg'
            alt=''
          />
        </div>
        <div className='col-md-6 col-12 text-left'>
          <h3>Motos de enduro por fin en México</h3>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
          <button>Comprar ahora</button>
        </div>
      </div>
    </div>
  );
}
