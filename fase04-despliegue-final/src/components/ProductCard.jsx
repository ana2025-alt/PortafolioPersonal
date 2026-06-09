import React from 'react';
import './ProductCard.css';

export default function ProductCard({ title, price, category, image }) {
  return (
    <article className="product-card-premium">
      <div className="card-imagen-wrapper">
        <img src={image} alt={title} className="card-img-real" />
        <div className="vidrio-overlay">
          <span className="badge-especie">{category}</span>
        </div>
      </div>
      <div className="card-info-wrapper">
        <h3 className="card-titulo-real">{title}</h3>
        <div className="card-footer-flex">
          <span className="crypto-precio">{price}</span>
          <span className="icon-premium">✦ Importado</span>
        </div>
      </div>
    </article>
  );
} 