import React from 'react';
import ProductCard from './ProductCard';
// 🎨 CORRECCIÓN: Importamos el archivo de estilos modular de la grilla
import './ProductList.css'; 

// Componente Puro que genera la grilla de productos
export default function ProductList({ products }) {
    return (
        <div className="grid-products">
            {products.map((product) => (
                <ProductCard 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>
    );
} 