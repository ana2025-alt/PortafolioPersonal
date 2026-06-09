import './TarjetaComida.css';
import React from 'react';

export default function TarjetaComida({ comida, onAlternar, onEliminar }) {
  return (
    <section className={`tarjeta-comida-pro ${comida.listo ? 'completada-status' : ''}`}>
      
      <div className="info-comida-flex">
        <span className={`badge-categoria ${comida.tipo.toLowerCase()}`}>{comida.tipo}</span>
        <h4>{comida.plato}</h4>
        <span className="calorias-flama">🔥 {comida.calorias} kcal</span>
      </div>

      <div className="imagen-miniatura-contenedor">
        <img 
          src={comida.imagen} 
          alt="Vista miniatura del plato" 
          className="img-miniatura" 
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60'; }}
        />
      </div>

      <div className="acciones-derecha-flex">
        <button 
          onClick={() => onAlternar(comida.id)} 
          className={`btn-estado-check ${comida.listo ? 'checked-pro' : ''}`}
          aria-label={comida.listo ? "Marcar como pendiente" : "Marcar como consumido"}
        >
          {comida.listo ? (
            <div className="check-done-box">
              <small>Completado</small>
              <span className="check-icon-svg">✓</span>
            </div>
          ) : (
            <span className="txt-pendiente-pro">⏳ Pendiente</span>
          )}
        </button>

        <button 
          onClick={() => onEliminar(comida.id)} 
          className="btn-borrar-pro" 
          title="Eliminar receta"
        >
          ❌
        </button>
      </div>

    </section>
  );
} 