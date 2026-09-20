# Tienda de Videojuegos 🎮

## Descripción
Proyecto Frontend de una tienda de videojuegos (eCommerce), desarrollado para la evaluación de la **Semana 6**. El proyecto ha evolucionado para incluir una manipulación avanzada del DOM, carrito de compras dinámico y consumo de datos mediante la Fetch API desde múltiples fuentes (locales y externas). Todo estructurado sobre un diseño responsivo utilizando Bootstrap 5.

## Características Principales (Semana 6)

* **Maquetación y Responsividad (Bootstrap 5):**
  * Barra de navegación (Navbar) con menús desplegables (Dropdowns) para filtrar categorías.
  * Carrusel de imágenes funcional.
  * Acordeones y Ventanas Modales (`Modals`) para la interfaz del Carrito de Compras.
  * Sistema de grillas (`grid`) adaptable a dispositivos móviles.

* **Manipulación Avanzada del DOM:**
  * **Carrito de Compras Completo:** Los usuarios pueden agregar productos al carrito, calcular el total de forma automática y eliminar productos individualmente. El carrito cuenta con estado sincronizado entre un componente tipo Acordeón y un Modal de "Resumen de Compra", además de opciones para vaciar el carrito o simular un pago.
  * Creación dinámica de elementos (`createElement`, `innerHTML`, `appendChild`) para dibujar la interfaz de la tienda de forma automatizada.

* **Consumo de APIs y Datos (Fetch API):**
  * **Base de Datos Local (`productos.json`):** El catálogo principal de videojuegos ya no es estático en el HTML. Se lee dinámicamente desde un archivo JSON local usando Fetch.
  * **API Externa:** La sección de "Reseñas de Clientes" se conecta a un servidor de pruebas (`JSONPlaceholder`) para extraer testimonios reales.
  * **Manejo de Errores:** En caso de fallas de conexión o archivos no encontrados, se implementaron bloques `.catch()` que muestran mensajes amigables al usuario directamente en la pantalla (`<h3 class="text-danger">...</h3>`).

* **Interactividad y Eventos (JavaScript):**
  * **Filtros por Categoría (`click`):** Un menú desplegable en el Navbar permite filtrar los juegos por consola (PS5, Xbox, Nintendo Switch).
  * **Buscador Integrado (`submit`):** Una barra de búsqueda intercepta la acción de envío (`preventDefault`) y filtra las tarjetas de productos según el texto ingresado. Incluye notificaciones si no hay coincidencias y realiza un `scroll` suave hacia los resultados.

## Tecnologías Utilizadas
* HTML5 Semántico
* CSS3 (Personalización de hovers y visibilidad en Modals)
* Bootstrap 5.3.8 (Diseño responsivo, Modals, Accordions, Dropdowns)
* JavaScript ES6 (Lógica interactiva, Fetch API, Filtrado de Arrays)
* JSON (Almacenamiento de estado local)

## Cómo ejecutar el proyecto
1. Clona este repositorio o descarga los archivos.
2. Abre el archivo `index.html` en un navegador. 
