import React from 'react'
import ReactDOM from 'react-dom/client'
import Aplicacion from './Aplicacion.jsx'
import './estilos.css' // 👈 Aquí arreglé el nombre del CSS para que lea el nuevo

ReactDOM.createRoot(document.getElementById('raiz')).render(
  <React.StrictMode>
    <Aplicacion />
  </React.StrictMode>,
) 