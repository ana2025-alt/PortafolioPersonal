# 📚 ASIGNACIÓN 05: CONSUMO DE API REST Y ARQUITECTURA EN REACT

### 👤 Datos de la Estudiante
* **Nombre y Apellido:** Ana Alexandra Anselmi Pallares
* **Cédula de Identidad:** V-29.640.288
* **Institución:** ITSU (2026)
* **Especialidad:** Informática / Desarrollo Web Full-Stack

---

### 🚀 Descripción del Proyecto (Fase 05)
Para esta asignación se desarrolló un catálogo dinámico y asíncrono utilizando **React** y empaquetado bajo **Vite**. El objetivo principal fue implementar un flujo desacoplado mediante una arquitectura limpia de componentes lógicos y componentes de presentación.

#### 🛠️ Tecnologías y Conceptos Aplicados:
1. **Componente Inteligente (ProductListContainer.jsx):** Controla la lógica del negocio, gestionando tres estados fundamentales (`products`, `loading`, `error`) y disparando un ciclo de vida con `useEffect` para consumir los datos en tiempo real de la API externa `https://fakestoreapi.com/products`.
2. **Componentes Puros de Presentación (ProductList.jsx y ProductCard.jsx):** Diseñados de forma modular y puramente reactiva para recibir la información a través de `props` y renderizar la interfaz sin alterar el estado global.
3. **Estilos CSS Modulares:** Desacoplamiento total del diseño visual utilizando hojas de estilo independientes (`.css`) para cada componente del catálogo con acabados modernos de Glassmorphism.

---

### 🌐 Enlaces de Entrega
* **Repositorio GitHub:** [https://github.com/ana225-alt/PortafolioPersonal](https://github.com/ana225-alt/PortafolioPersonal)
* **Despliegue de la Asignación 5:** `./fase05-tiendaApi/dist/index.html` (Integrado en el Portafolio Principal) 