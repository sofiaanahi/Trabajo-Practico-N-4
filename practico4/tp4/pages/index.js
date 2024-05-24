import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from '../pages/App.jsx';

function ClientSideRender() {
  useEffect(() => {
    // Verifica si document está definido antes de usarlo
    if (typeof document !== 'undefined') {
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
  }, []); // El segundo argumento de useEffect, un array vacío, garantiza que el efecto se ejecute solo una vez después del montaje

  return null; // Devolvemos null ya que no hay contenido visible en este componente
}

export default ClientSideRender;
