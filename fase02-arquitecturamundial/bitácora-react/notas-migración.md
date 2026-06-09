# 📔 Bitácora de Aprendizaje: Análisis de Migración a React

## 🔍 Contexto del Proyecto
Este documento resume las observaciones, desafíos y descubrimientos técnicos identificados al evaluar la migración de nuestra infraestructura nativa ("Colección Copa 2026") hacia una arquitectura basada en componentes con **React**.

## 🛠️ Desafíos de la Arquitectura Nativa vs. React

### 1. Gestión del Estado (Stock y Carrito)
- **Nativo:** Actualmente controlamos el stock reactivo manipulando directamente el DOM con funciones JavaScript (`document.getElementById`). Si el usuario cambia el stock manualmente o agrega un termo/camiseta al carrito, dependemos de renderizados manuales continuos.
- **En React:** Se solucionaría implementando el hook `useState`. El carrito y el inventario serían estados centralizados. Al actualizar el estado, React se encargaría de re-renderizar de forma óptima solo los componentes afectados.

### 2. Modularidad de la Interfaz
- **Nativo:** El archivo `índice.html` contiene toda la estructura de la página (barra de búsqueda, rejilla de productos, barra lateral del carrito).
- **En React:** La interfaz se fragmentaría en componentes reutilizables independientes: `<Navbar />`, `<Buscador />`, `<CardProducto />`, y `<CarritoSidebar />`. Esto facilita el mantenimiento del código.

### 3. Sistema de Alertas y Mensajes Lindos
- **Nativo:** Las validaciones de correo y los mensajes estéticos de confirmación se inyectan dinámicamente mediante clases de CSS y bloques de HTML creados al vuelo con JS.
- **En React:** Se podría aprovechar el ecosistema de librerías como `framer-motion` para animaciones fluidas o crear un componente nativo de alertas `<Toast />` controlado por un estado booleano temporizado.

## 💡 Conclusión del Análisis
Mover el proyecto a una arquitectura de componentes mejora la escalabilidad del sistema y limpia el código de manipulaciones ruidosas del DOM. Este aprendizaje sentó las bases estructurales para el diseño de nuestro producto MVP de la Fase 3 utilizando **Vite**. 