📑 MANUAL TÉCNICO DE ARQUITECTURA MODULAR - NUTRITRACK
Estudiante: Alexandra

Fase: 03 - Producto Mínimo Viable (MVP)

Tecnologías: React.js + Vite + CSS3 Semántico + LocalStorage
* **Nota de Alcance sobre Multimedia:** Por los momentos, en esta Fase 3, el sistema no cuenta con un módulo de carga de archivos (File Uploader) conectado a un servidor para almacenar imágenes del usuario. En su lugar, se implementó un motor predictivo que asigna imágenes automáticas desde la nube basándose en palabras clave para simular la experiencia final sin sobrecargar el almacenamiento local. 

1. Introducción a la Modernización del Sistema
Para cumplir con los estándares internacionales de ingeniería de software en 2026, el sistema NutriTrack ha sido completamente migrado de una arquitectura monolítica (un solo archivo) a una arquitectura basada en componentes desacoplados. Esto garantiza la escalabilidad del sistema, facilita las pruebas unitarias y elimina el "Código Espagueti".

2. Árbol de Estructura de Archivos del Proyecto
El código se organizó de forma semántica dividiendo la lógica de los componentes y segregando sus hojas de estilos individuales:

fase03-producto-mvp/
├── documentos/
│   ├── arquitectura-componentes.txt
│   ├── planificacion-mvp.md
│   └── manual-tecnico.md           <-- (Este documento de entrega)
├── src/
│   ├── components/                 <-- Componentes Atómicos Reutilizables
│   │   ├── DetallePlato.jsx        <-- Renderiza el panel de control izquierdo
│   │   ├── DetallePlato.css
│   │   ├── FormularioComida.jsx    <-- Maneja la captura de nuevas recetas
│   │   ├── FormularioComida.css
│   │   ├── TarjetaComida.jsx       <-- Fila individual de la lista de comidas
│   │   └── TarjetaComida.css
│   ├── Aplicacion.jsx              <-- Orquestador de estados y LocalStorage
│   ├── estilos.css                 <-- Variables globales y Layout (Grid)
│   └── principal.jsx               <-- Punto de entrada e inicialización de React

Persistencia de Datos en Tiempo Real (LocalStorage): Se integró el hook de ciclo de vida useEffect para sincronizar el estado del menú fitness directamente con la memoria del navegador. Las recetas añadidas y los estados "Completados" no se pierden al refrescar la página.

Encapsulamiento de Estilos (CSS Modular): Cada componente (.jsx) importa exclusivamente su archivo .css homónimo. Esto evita colisiones de clases en el DOM y mantiene los archivos con menos de 60 líneas de código para una lectura óptima.

Controladores Semánticos del DOM: Se sustituyeron los contenedores genéricos (div) por etiquetas semánticas de HTML5 de alto nivel: <header>, <main>, <aside>, <section>, y <article>.

4. Flujo de Datos (Arquitectura React)
Aplicacion.jsx (Padre): Gobierna el estado global (comidas) y distribuye los métodos controladores (onAgregar, onAlternar, onEliminar) hacia los componentes hijos mediante Props.

FormularioComida (Hijo): Captura de forma aislada los datos del input y los eleva al padre al ejecutar el evento onSubmit.

TarjetaComida (Hijo): Recibe un objeto del array, renderiza su vista y gatilla los cambios de estado de manera reactiva. 