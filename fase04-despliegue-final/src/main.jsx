import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Enlaza directo con el index del laboratorio
import './estilos.css';   // Carga los estilos de reinicio oscuros

ReactDOM.createRoot(document.getElementById('raiz')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 