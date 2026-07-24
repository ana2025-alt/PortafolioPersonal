/**
 * Lógica Interactiva del Portafolio Académico - Asignación 6
 * Autora: Ana Anselmi (C.I. 29.640.288)
 */

// Base de datos de las asignaciones del portafolio
const asignacionesDB = {
    1: {
        title: "Fase 01: Merchandising",
        img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=400",
        desc: "Tienda interactiva para la campaña 'Colección Copa 2026'. Enfoque Técnico: Estructuración semántica en HTML5, layouts modernos con CSS Grid/Flexbox y renderizado dinámico inicial de productos.",
        code: '<section class="merchandising">\n  <div class="product-grid"></div>\n</section>'
    },
    2: {
        title: "Fase 02: Arquitectura",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400",
        desc: "Módulo avanzado de gestión interna para control de stock. Enfoque Técnico: Desacoplamiento lógico utilizando módulos nativos de JavaScript (ES Modules), algoritmos de validación reactiva de datos y control de flujos con lógica condicional.",
        code: 'import { actualizarStock } from "./modules/inventario.js";\nactualizarStock(productId, cantidad);'
    },
    3: {
        title: "Fase 03: Producto MVP",
        img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400",
        desc: "Producto Mínimo Viable (MVP) enfocado en la automatización de problemas del entorno real. Enfoque Técnico: Migración del entorno de desarrollo a Vite + React. Creación de hooks iniciales, manejo de interfaces SPA y optimización de código para producción.",
        code: 'export default function App() {\n  return <ProductContainer />;\n}'
    },
    4: {
        title: "Fase 04: Luxury Showroom",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400",
        desc: "Catálogo de presentación premium consolidado. Enfoque Técnico: Configuración de compilación optimizada en Vite, empaquetado para distribución en la web (build) y despliegue continuo de entornos estáticos.",
        code: 'npm run build\n# Empaquetado de assets para producción estática'
    },
    5: {
        title: "Fase 05: Fake Store API",
        img: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=400",
        desc: "Catálogo dinámico síncrono conectado a una base de datos externa. Enfoque Técnico: Implementación de arquitectura avanzada dividida en Componentes Inteligentes y Puros. Consumo asíncrono mediante Fetch API a fakestoreapi.com.",
        code: 'useEffect(() => {\n  fetch("https://fakestoreapi.com/products")\n    .then(res => res.json());\n}, []);'
    }
};

// Función para cargar la información y marcar el botón activo correctamente
function loadAsignacion(id, element) {
    if (element) {
        document.querySelectorAll('.menu-item-card').forEach(btn => btn.classList.remove('active'));
        element.classList.add('active');
    }

    document.getElementById('asig-title').innerText = asignacionesDB[id].title;
    document.getElementById('asig-img').src = asignacionesDB[id].img;
    document.getElementById('asig-desc').value = asignacionesDB[id].desc;
    document.getElementById('asig-code').value = asignacionesDB[id].code;
}

// Función para alternar entre las pestañas principales
function switchTab(target, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.view-content').forEach(v => v.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('section-' + target).classList.add('active');
}

// Función para probar la conexión con la API externa en vivo (Fase 5)
async function probarApiExterna() {
    const out = document.getElementById('api-output');
    out.innerText = "Consultando Fake Store API...";
    try {
        let res = await fetch('https://fakestoreapi.com/products/1');
        let data = await res.json();
        out.innerText = "✅ Respuesta Exitosa (Status 200 OK):\n" + JSON.stringify(data, null, 2);
    } catch(e) {
        out.innerText = "❌ Error al conectar con la API.";
    }
}

// Cargar por defecto la Fase 1 al abrir la página seleccionando el primer botón automáticamente
window.onload = () => {
    const primerBoton = document.querySelector('.menu-item-card');
    if (primerBoton) {
        loadAsignacion(1, primerBoton);
    }
}; 
