import React from 'react';

import ButtonForm from 'Atoms/ButtonForm';

export default function Footer() {
  return (
    <footer className='container-fluid '>
      <div className='row m-0 justify-content-between align-items-center'>
        <div className='col-md-3 col-12 text-md-left text-center'>
          <img className='img-fluid' src='/images/logo.png' alt='Sherco Logo' />
          <p className='mt-3'>
            Próximamente todos los productos estarán disponibles en éste sitio
            web.
          </p>
          <ButtonForm />
        </div>
        <div className='col-md-3 mt-md-0 mt-4 col-12 text-md-right text-center'>
          <img
            className='img-fluid'
            src='/images/mexico.png'
            width='50'
            alt='Sherco México'
          />
          <h3>Sitio web oficial</h3>
          <h5>Siguenos en Facebook</h5>
          <a
            href='https://www.facebook.com/Sherco-Enduro-Mexico-103188164713571'
            rel='noreferrer'
            target='_blank'
            className='facebook-ref'
          >
            <img
              className='img-fluid'
              src='/images/facebook.png'
              width='50'
              alt='Sherco México'
            />
          </a>
        </div>
      </div>
      <small>
        Importador oficial Sherco México {String(new Date().getFullYear())}®
      </small>
    </footer>
  );
}
