# Tienda de Videojuegos 🎮

## Descripción
Proyecto Frontend de una tienda de videojuegos desarrollado para la evaluación de la Semana 5. El proyecto, originalmente maquetado con **Bootstrap 5**, ahora incluye **JavaScript puro (Vanilla JS)** para añadir interactividad dinámica, manipulación del DOM y consumo de datos externos mediante la Fetch API.

## Características Principales
* **Manipulación del DOM e Interactividad:**
  * **Eventos de Mouse (`mouseover` / `mouseout`):** Las imágenes de los videojuegos reaccionan al pasar el cursor, modificando su opacidad de forma dinámica.
  * **Eventos de Clic (`click`):** Los botones de "Agregar al carrito" interceptan la acción del usuario (`preventDefault`) y muestran una alerta confirmando la acción.
  * **Eventos de Formulario (`submit`):** Se implementó un formulario de suscripción (Newsletter) que captura el correo del usuario, previene la recarga de la página, muestra un mensaje de éxito modificando las clases de Bootstrap en tiempo real y limpia los campos tras el envío.
* **Consumo de APIs Externas (Fetch API):**
  * La sección de "Reseñas de Clientes" se construye automáticamente consultando una base de datos pública externa (JSONPlaceholder).
  * Uso de **Promesas** (`.then()`, `.catch()`) para manejar la carga asíncrona de los datos y prevenir errores de red.
  * Construcción dinámica del HTML (`createElement`, `innerHTML`, `appendChild`) inyectando las reseñas directamente al sistema de cuadrículas de Bootstrap.
* **Diseño Responsivo (Mobile-First):** Menú colapsable, carrusel de consolas y un sistema de cuadrículas (`col-md-6`, `col-lg-4`) totalmente adaptable a cualquier dispositivo.

## Tecnologías Utilizadas
* HTML5 Semántico
* CSS3 (Reglas base y recortes de imágenes)
* Bootstrap 5.3.8 (Diseño responsivo y componentes visuales)
* **JavaScript ES6** (Lógica interactiva, Event Listeners, manipulación del DOM y Fetch API)

## Cómo ejecutar el proyecto
1. Clona este repositorio o descarga los archivos en formato ZIP.
2. Abre el archivo `index.html` en cualquier navegador web moderno (Google Chrome, Firefox, Edge).
3. Asegúrate de tener conexión a internet, no solo para cargar Bootstrap, sino para que la función de *Fetch API* pueda conectarse al servidor externo y descargar las reseñas de los clientes.

