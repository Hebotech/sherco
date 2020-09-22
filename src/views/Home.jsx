import React, { useRef } from 'react';

import HeroHeader from 'Organisms/Home/HeroHeader.jsx';
import Features from 'Organisms/Home/Features.jsx';

export default function Home() {
  return (
    <main className='container-fluid home-view'>
      <HeroHeader />
      <Features />
    </main>
  );
}
