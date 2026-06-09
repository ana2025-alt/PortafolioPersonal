import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import './ProductListContainer.css'; 

// Componente Inteligente (Contenedor Lógico)
export default function ProductListContainer() {
    // 1. Definición de los 3 estados requeridos por la asignación
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 2. Hook de ciclo de vida para disparar la petición HTTP al montar el componente
    useEffect(() => {
        const obtenerProductosApi = async () => {
            try {
                setLoading(true);
                // Fetch a la URL real de Fake Store API
                const respuesta = await fetch('https://fakestoreapi.com/products');
                
                if (!respuesta.ok) {
                    throw new Error('No se pudo establecer conexión con el servidor de la tienda.');
                }
                
                const datosJson = await respuesta.json();
                setProducts(datosJson); // Guardamos la data real
                setError(null);
            } catch (err) {
                setError(err.message); // Capturamos cualquier error de red
            } finally {
                setLoading(false); // Apagamos el estado de carga al terminar
            }
        };

        obtenerProductosApi();
    }, []); // Array vacío para que solo se ejecute una vez

    // 3. Renderizados condicionales basados en el estado actual de la petición
    if (loading) {
        return (
            <div className="tienda-estado-contenedor">
                <div className="tienda-spinner"></div>
                <p>Cargando catálogo oficial desde Fake Store API...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="tienda-estado-contenedor tienda-alerta-error">
                <span>⚠️ Error de Carga:</span>
                <p>{error}</p>
                <button onClick={() => window.location.reload()} className="btn-tienda-reintentar">
                    Reintentar Conexión
                </button>
            </div>
        );
    }

    // 4. Si la data cargó con éxito, se la inyectamos al componente de presentación puro
    return (
        <div className="tienda-seccion-presentacion">
            <h2 className="tienda-subtitulo">Catálogo Dinámico API - Asignación 5</h2>
            <ProductList products={products} />
        </div>
    );
} 