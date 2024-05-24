// _app.js
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Aquí puedes incluir cualquier contenido que desees que aparezca en todas las páginas */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
