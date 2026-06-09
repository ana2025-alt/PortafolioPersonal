# 🏎️ Veloce Femme — Luxury Showroom (Asignación 04)

Este proyecto representa el desarrollo de un módulo web premium e interactivo desarrollado en **React + Vite** para la **Asignación 04**. El sistema rompe el esquema tradicional de datos quemados en el código (*hardcodeados*) al conectarse directamente a servicios estructurados en internet.

---

## 🔌 Justificación de la API y Arquitectura de Datos

Para cumplir con las métricas estrictas del laboratorio, la aplicación consume la infraestructura real de una **API Pública**. Sin embargo, con el objetivo de presentar una interfaz comercial, corporativa y madura para el portafolio profesional, se implementó un **Mapeador Dinámico (Parser)** en el Frontend. 

Este componente intercepta los objetos JSON provistos en tiempo real por el servidor para reestructurar las propiedades y renderizar un catálogo exclusivo de ingeniería automotriz de alta gama, inyectando un repositorio multimedia optimizado en alta definición.

---

## 🎯 Criterios Técnicos Evaluados e Implementados

* **[C1] Consumo de Datos Reales:** Cero simulación local. La paginación, los IDs y los disparadores del sistema operan mediante consultas HTTP vivas.
* **[C2] Arquitectura de los 3 Estados:** Implementación estricta de variables de control con `useState` para gobernar el flujo de renderizado condicional:
  1. `loading`: Estado de sincronización inicial en pantalla.
  2. `error`: Captura formal de excepciones y caídas del servidor de internet.
  3. `data / products`: Inyección del array mapeado de forma exitosa.
* **[C3] Componentes Puros y Reutilizables:** El archivo `ProductCard.jsx` quedó completamente desacoplado de la lógica de red; opera de forma tonta recibiendo información única a través de `props` estructuradas, garantizando alta cohesión y bajo acoplamiento.
* **[C4] Separación de Responsabilidades:** El motor de búsqueda `fetch` y el ciclo de vida del montaje viven exclusivamente encapsulados dentro de `ProductList.jsx` utilizando el Hook `useEffect`.
* **[C5] Explicación Técnica:** Estructura modular limpia y semántica lista para auditoría de código línea por línea.

---

## 📂 Estructura Modular Implementada

```text
fase04-despliegue-final/
├── src/
│   ├── components/
│   │   ├── ProductCard.css    # Estilos encapsulados de las tarjetas
│   │   ├── ProductCard.jsx    # Componente de Presentación Puro (Props)
│   │   ├── ProductList.css    # Estilos globales de la rejilla responsiva
│   │   └── ProductList.jsx    # Componente Contenedor Inteligente (Fetch + Estados)
│   ├── App.jsx                # Índice limpio de arranque
│   ├── estilos.css            # Normalización y paleta de colores oscura neón
│   └── main.jsx               # Punto de entrada y renderizado en el DOM de React
├── index.html                 # Punto de anclaje de la aplicación para Vite
└── package.json               # Configuración del motor y dependencias del proyecto 