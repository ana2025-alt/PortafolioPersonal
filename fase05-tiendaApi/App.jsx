import React from 'react';
import ProductListContainer from './src/components/ProductListContainer'; 

export default function App() {
    return (
        <div className="tienda-app-layout">
            {/* Barra de navegación superior de la tienda */}
            <nav className="tienda-navbar">
                <div className="tienda-logo">
                    <span className="tienda-icono-react">⚛️</span> FAKE STORE SHOWROOM
                </div>
                <div className="tienda-badge-asignacion">
                    ASIGNACIÓN 5
                </div>
            </nav>

            {/* Espacio principal del catálogo */}
            <main className="tienda-main-content">
                <ProductListContainer />
            </main>
        </div>
    );
} 