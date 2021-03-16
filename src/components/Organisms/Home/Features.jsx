import React from 'react';

import ButtonForm from 'Atoms/ButtonForm';

export default function Features() {
  return (
    <div className='_feature text-center container-fluid'>
      <div className='row m-0 pt-5 text-center justify-content-around align-items-center'>
        <div className='col-md-6 col-12 '>
          <img
            className='_image img-fluid'
            src='/images/moto-enduro.jpg'
            alt='Sherco México Enduro'
            loading='lazy'
          />
          <img
            className='_image img-fluid'
            src='/images/team-mexico.jpg'
            alt='Sherco México'
            loading='lazy'
          />
        </div>
        <div className='col-md-4 mt-md-0 mt-4 col-12 text-md-left text-center __cta'>
          <h2>Sé parte del movimiento </h2>
          <p className='mt-3 mb-3'>
            Sherco es una marca internacional que está especialmente orientada a
            <strong> vehículos todoterreno de alta calidad.</strong>
            <br />
            Sí te gusta la emoción de sentir el viento en tu rostro y la
            <strong> energía de la motocicleta perfecta </strong>, llegaste al
            lugar indicado. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sit, laboriosam? Sapiente inventore accusantium soluta! Fuga
            nulla quae ratione, id consequuntur error nihil? Numquam sit nostrum
            neque quibusdam cupiditate quo iusto?
          </p>
          <ButtonForm />
        </div>
      </div>
    </div>
  );
}
