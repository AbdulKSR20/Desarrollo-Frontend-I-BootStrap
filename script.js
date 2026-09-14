const botonesCarrito = document.querySelectorAll(".btn-carrito");

//boton carrito muestra alerta al hacer click en el boton de agregar al carrito
botonesCarrito.forEach(boton => {
    boton.addEventListener("click", function (evento) {
        evento.preventDefault();
        alert("Videojuego agregado al carrito");
    });
});

//imagenes cards cambia opacidad al pasar el mouse por encima y vuelve a la normalidad al quitar el mouse
const imagenesCards = document.querySelectorAll(".card-img-top");

imagenesCards.forEach(imagen => {
    imagen.addEventListener("mouseover", function () {
        imagen.style.opacity = "0.7";
    });

    imagen.addEventListener("mouseout", function () {
        imagen.style.opacity = "1";
    });
});

//script para rellenar el contenedor de reseñas haciendo fetch a una api externa
const contenedorResenas = document.getElementById("contenedorResenas");

function cargarResena() {
    fetch('https://jsonplaceholder.typicode.com/users')

        .then(respuesta => respuesta.json())

        .then(usuarios => {
            const tresUsuarios = usuarios.slice(0, 3);
            tresUsuarios.forEach(usuario => {
                const columna = document.createElement('div');
                columna.classList.add('col-12', 'col-md-4', 'mb-3');

                columna.innerHTML = `
            <div class="card p-3 shadow-sm">
                <h5 >${usuario.name}</h5>
                <p class="text-muted">${usuario.company.catchPhrase}</p>
                <small>Contacto: ${usuario.email}</small>
            </div>
            `
                contenedorResenas.appendChild(columna);
            })
        })
        .catch(error => {
            console.error("Hubo un error al cargar las reseñas: ", error);
            contenedorResenas.innerHTML = `<p class="text-danger">No se pudieron cargar las reseñas</p>`;
        });
}


//formulario muestra alerta al hacer click en el boton de suscribirme y muestra el correo electronico en la consola
const formulario = document.getElementById("formulario");
const mensajeExito = document.getElementById("mensajeExito");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const email = document.getElementById("email").value;

    mensajeExito.classList.remove("d-none");

    console.log("Nuevo suscriptor agregado: " + email);

    formulario.reset();
});

cargarResena();