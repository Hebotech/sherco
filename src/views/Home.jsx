import React, { lazy, useState, Suspense } from 'react';

import HeroHeader from 'Organisms/Home/HeroHeader.jsx';
import Features from 'Organisms/Home/Features.jsx';
const ProductsExperience = lazy(() =>
  import(
    /* webpackChunkName: "product-experience" */
    'Organisms/Home/ProductsExperience.jsx'
  )
);

export default function Home() {
  let [animationEnded, setAnimationEnded] = useState(false);
  return (
    <main className='container-fluid home-view'>
      <HeroHeader animationStatus={setAnimationEnded} />
      <Features />
      <Suspense
        fallback={
          <div className='spinner-border text-primary' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        }
      >
        {animationEnded ? (
          <ProductsExperience />
        ) : (
          <div className='row m-0 mt-5 justify-content-center align-items-center'>
            <div className='spinner-border text-primary' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>
          </div>
        )}
      </Suspense>
    </main>
  );
}
