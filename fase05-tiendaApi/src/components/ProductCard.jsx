import React from 'react';
import './ProductCard.css'; 

// Componente Puro de Presentación (Reutilizable)
export default function ProductCard({ id, title, price, image }) {
    return (
        <div className="product-card">
            <div className="card-img-container">
                <img src={image} alt={title} className="card-img" />
            </div>
            <div className="card-info">
                <h3 className="card-title" title={title}>{title}</h3>
                <div className="card-footer-details">
                    <span className="card-price">${price.toFixed(2)}</span>
                    <span className="card-id">ID: {id}</span>
                </div>
                <button className="btn-product-action">Añadir al Carrito</button>
            </div>
        </div>
    );
} 