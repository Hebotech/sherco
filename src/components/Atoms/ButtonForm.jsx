import React, { useEffect } from 'react';

export default function ButtonForm() {
  useEffect(() => {
    var qs,
      js,
      q,
      s,
      d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = 'typef_orm_share',
      b = 'https://embed.typeform.com/';
    if (!gi.call(d, id)) {
      js = ce.call(d, 'script');
      js.id = id;
      js.src = b + 'embed.js';
      q = gt.call(d, 'script')[0];
      q.parentNode.insertBefore(js, q);
    }
  }, []);
  return (
    <>
      <a
        className='typeform-share button cta-form'
        rel='noreferrer'
        href='https://form.typeform.com/to/IbzQYyWz'
        data-mode='popup'
        target='_blank'
      >
        Comprar ahora
      </a>
    </>
  );
}
