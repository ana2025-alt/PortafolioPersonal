/**
 * Módulo modular para control interno de stock (Fase 2)
 */
export const inventarioLocal = [
    { id: 1, item: "Camisa Colección Copa", stock: 12 },
    { id: 2, item: "Balón Oficial", stock: 6 }
];

export function verificarStock(id) {
    const item = inventarioLocal.find(p => p.id === id);
    console.log(`[Inventario] Stock verificado para ID ${id}:`, item ? item.stock : "No encontrado");
    return item;
} 