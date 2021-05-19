import React, { lazy, useState, Suspense, useEffect } from 'react';

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
  let [asyncStatus, setAsyncStatus] = useState(false);
  let [products, setProducts] = useState([]);
  let [brandInfo, setBrandInfo] = useState(false);

  useEffect(() => {
    async function getProductsAndInfo() {
      let apiResponse = await fetch('https://apihebo.online/sherco');
      let responseJson = await apiResponse.json();

      setProducts(responseJson.data);

      let apiResponseBrand = await fetch('https://apihebo.online/sherco/brand');

      let responseJsonBrand = await apiResponseBrand.json();

      setBrandInfo(responseJsonBrand.data);

      setAsyncStatus(true);
    }

    getProductsAndInfo();
  }, []);

  return (
    <main className='container-fluid home-view'>
      <HeroHeader brandInfo={brandInfo} animationStatus={setAnimationEnded} />
      <Features />
      <Suspense
        fallback={
          <div className='spinner-border text-primary' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        }
      >
        {animationEnded && asyncStatus && products.length ? (
          <ProductsExperience products={products} />
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
