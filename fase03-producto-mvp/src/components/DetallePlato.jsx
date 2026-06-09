import './DetallePlato.css';
import React from 'react';

export default function DetallePlato({ platoDestacado }) { 
  if (!platoDestacado) {
    return <p className="txt-no-data">No hay platos seleccionados en el menú diario.</p>;
  }

  return (
    <article className="detalle-card-content">
      <span className="tag-tipo-fijo">{platoDestacado.tipo}</span>
      <h3 className="titulo-plato-fijo">{platoDestacado.plato}</h3>
      <p className="calorias-fijas">🔥 {platoDestacado.calorias} kcal</p>
      
      <div className="contenedor-imagen-flotante">
        <img 
          src={platoDestacado.imagen} 
          alt={`Fotografía de ${platoDestacado.plato}`} 
          className="img-plato-premium"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60'; }}
        />
      </div>

      <section className="seccion-ingredientes">
        <h4>📋 Macro Ingredientes:</h4>
        <ul>
          {platoDestacado.ingredientes.map((ing, i) => (
            <li key={i}>• {ing}</li>
          ))}
        </ul>
      </section>
    </article>
  );
} 