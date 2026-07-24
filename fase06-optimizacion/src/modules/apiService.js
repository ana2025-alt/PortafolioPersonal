/**
 * Módulo modular para conexión con Fake Store API (Fase 5)
 */
export async function consultarAPI() {
    console.log("[apiService] Conectando con fakestoreapi.com...");
    const respuesta = await fetch('https://fakestoreapi.com/products?limit=3');
    const productos = await respuesta.json();
    console.table(productos);
    return productos;
} 