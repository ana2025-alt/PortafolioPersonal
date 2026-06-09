📑 Planificación del Producto Mínimo Viable (MVP) - NutriTrack
* **Nota de Alcance sobre Multimedia:** Por los momentos, en esta Fase 3, el sistema no cuenta con un módulo de carga de archivos (File Uploader) conectado a un servidor para almacenar imágenes del usuario. En su lugar, se implementó un motor predictivo que asigna imágenes automáticas desde la nube basándose en palabras clave para simular la experiencia final sin sobrecargar el almacenamiento local. 

1. Planteamiento del Problema
En el desarrollo de sistemas interactivos aplicados al bienestar y la salud, los usuarios requieren interfaces reactivas que permitan gestionar planes nutricionales diarios sin fricciones operativas. Este MVP resuelve la necesidad de centralizar la visualización de platos, control de ingredientes y el progreso calórico diario en tiempo real en una interfaz optimizada para el enfoque fitness.

2. Alcance del MVP (Fase 3 - Actualizado)
Arquitectura Modular Desacoplada: División del sistema en componentes atómicos independientes (FormularioComida, DetallePlato, TarjetaComida) con encapsulamiento de estilos CSS para evitar sobrecarga en el DOM.

Persistencia de Datos Real (LocalStorage): Sincronización del estado de la aplicación con la memoria del navegador. Los platos agregados, eliminados o marcados como consumidos se mantienen intactos al recargar la página.

Control de Estado e Interactividad: Actualización reactiva de las calorías del menú. El marcado de platos completados altera dinámicamente los estilos visuales (Glow Verde Esmeralda) para identificar la ingesta.

Asignación Predictiva de Contenido Multimedia: Motor condicional basado en strings que detecta palabras clave en el nombre del plato (ej: arepa, pollo, fresas) para renderizar automáticamente imágenes optimizadas desde la nube.

Filtro de Datos por Búsqueda: Motor de búsqueda reactivo en la barra superior que filtra la lista de comidas en tiempo real según el texto ingresado.

3. Tecnologías Utilizadas
Frontend Core: React.js (Librería declarativa de JavaScript basada en componentes y hooks como useState y useEffect).

Empaquetador de Módulos: Vite v8.0 (Entorno de desarrollo de alta velocidad).

Estilos de Interfaz: CSS3 estructurado mediante Variables Globales (:root), efectos de Glassmorphism (vidrio ahumado) y maquetación adaptable (Responsive Grid) para PC y dispositivos móviles. 