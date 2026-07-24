Documentación Técnica de Desarrollo: Fase 06 (Módulos, Estructura y Auditoría de Consola F12)
1. Objetivo del Proyecto
Desarrollar un dashboard interactivo modular que documente las fases del portafolio académico, estructurando el código fuente en carpetas desacopladas según las buenas prácticas de desarrollo web frontend, e implementando una guía visual y práctica de depuración utilizando la consola de Google Chrome (DevTools / F12) junto con el consumo real de una API REST externa.

2. Arquitectura y Modularización del Código
Para cumplir con los estándares de mantenibilidad y orden, se eliminó la estructura monolítica (archivos gigantes) y se dividió el proyecto en carpetas y archivos independientes:

Texto plano
fase06-optimizacion/
├── index.html            <-- Estructura semántica limpia y contenedores principales
├── style.css             <-- Capa de diseño visual, variables CSS y adaptabilidad (Grid/Flexbox)
├── script.js             <-- Lógica de control de pestañas, bases de datos locales y fetch de APIs
└── src/
    └── modules/
        ├── apiService.js   <-- Módulo ES6 para la gestión centralizada de peticiones HTTP (Fetch)
        └── inventario.js   <-- Módulo ES6 para el control lógico del stock y validación de datos
3. Proceso de Desarrollo Paso a Paso
Paso 1: Creación de la Estructura Base (index.html)
Se diseñó un documento HTML5 semántico estructurado en componentes lógicos:

Header corporativo: Con insignia de identificación académica (Ana Anselmi | C.I. 29.640.288).

Sistema de Pestañas Maestras: Botones interactivos para alternar dinámicamente entre las vistas de los Módulos del Proyecto, la Guía de la Consola F12 y el Probador de API.

Panel Visor Dinámico: Una interfaz dividida en rejilla (grid) que muestra tarjetas interactivas a la izquierda y un panel de visualización detallada a la derecha con imágenes, descripciones editables y bloques de código fuente.

Paso 2: Desarrollo del Sistema Visual y Estilos (style.css)
Se implementó un sistema de diseño basado en Variables CSS (:root) para mantener una paleta de colores coherente y moderna (fondos espaciales oscuros con acentos en tonos naranja y dorado).

Se utilizaron layouts avanzados con CSS Grid y Flexbox para asegurar que la interfaz sea completamente responsiva y se adapte de manera fluida tanto a pantallas de escritorio como a dispositivos móviles.

Se añadieron efectos estéticos como Glassmorphism (fondos translúcidos con backdrop-filter), transiciones suaves al hacer hover sobre las tarjetas y contenedores de código con formato monoespaciado.

Paso 3: Implementación de la Lógica Interactiva (script.js)
Se programó una base de datos interna estructurada en objetos JavaScript para almacenar la información técnica de las fases del portafolio.

Se crearon funciones modulares optimizadas para:

loadAsignacion(id, element): Gestiona el cambio dinámico de contenidos (títulos, imágenes ilustrativas, descripciones técnicas y fragmentos de código) según la tarjeta seleccionada por el usuario.

switchTab(target, btn): Controla la visibilidad de las vistas principales mediante la manipulación de clases CSS (active).

probarApiExterna(): Una función asíncrona basada en async/await y la Fetch API que realiza solicitudes HTTP en tiempo real a la API pública fakestoreapi.com, manejando estados de carga, respuestas exitosas (Status 200 OK) y captura de errores en pantalla.

Paso 4: Creación de Módulos Independientes (src/modules/)
apiService.js: Encapsula la lógica de servicios asíncronos para el consumo de endpoints externos, aplicando mejores prácticas de control de errores mediante bloques try/catch.

inventario.js: Simula un sistema modular de control de stock y validación de productos mediante arreglos de datos estructurados, facilitando la importación de funciones entre archivos de JavaScript (import/export).

Paso 5: Integración de la Guía Profesional de la Consola F12
Se desarrolló una sección didáctica dedicada a explicar de manera visual el uso correcto de las Herramientas de Desarrollador (DevTools) de Google Chrome:

Pestaña Elements: Inspección y modificación en vivo del DOM y Box Model.

Pestaña Console: Trazas de ejecución con console.log() y depuración tabular con console.table().

Pestaña Network: Auditoría de tiempos de carga, cabeceras y payloads JSON de peticiones asíncronas.

Pestaña Application: Gestión y supervisión de la persistencia local (localStorage y SessionStorage).
