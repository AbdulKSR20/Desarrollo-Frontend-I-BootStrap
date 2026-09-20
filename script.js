//script para filtrar productos por consola

const botonesFiltro = document.querySelectorAll(".filtro-consola");

botonesFiltro.forEach(boton => {
    // se agrega un event listener a cada boton de filtro
    boton.addEventListener("click", function (e) {
        e.preventDefault();
        const busqueda = e.target.textContent.trim().toLowerCase();
        // se obtienen todas las tarjetas de videojuegos
        const tarjetas = document.querySelectorAll("#contenedorProductos .col-12");

        let juegosEncontrados = 0;

        // se recorren todas las tarjetas
        tarjetas.forEach(tarjeta => {
            // se obtiene la consola de cada tarjeta
            const consola = tarjeta.querySelector(".consola").textContent.toLowerCase().trim();

            // se verifica si la consola incluye la busqueda o si la busqueda es "todas"
            if (consola.includes(busqueda) || busqueda === "todas") {

                tarjeta.style.display = "block";
                juegosEncontrados++;

            } else {
                tarjeta.style.display = "none";
            }
        });

        if (juegosEncontrados === 0) {
            alert("No se encontraron resultados para la busqueda: " + busqueda);
        }

        //se desplaza hacia la seccion de productos
        document.getElementById("contenedorProductos").scrollIntoView({ behavior: 'smooth' });
    });
});


//script para rellenar el contenedor de productos haciendo fetch a un archivo JSON
const contenedorProductos = document.getElementById("contenedorProductos");

function cargarProductos() {
    fetch('productos.json')
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("Error al cargar los productos.Intente de nuevo mas tarde.");
            }
            return respuesta.json()
        })
        .then(productos => {
            productos.forEach(producto => {
                //Se recrean las cartas dinamcamente como estaban anteriormente
                const columna = document.createElement('div');
                columna.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4');
                columna.innerHTML = `
            <div class="card text-bg-dark mb-3">
                <img src="${producto.imagen}" class="card-img-top" alt="producto.nombre">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="precio mt-auto">Precio: $${producto.precio} CLP</p>
                    <p class="consola">Consola: ${producto.consola}</p>
                    <button class="btn btn-primary mt-2" onclick="agregarAlCarrito('${producto.nombre}',${producto.precio})">Agregar al Carrito</button>
                </div>
            </div>
            `;

                contenedorProductos.appendChild(columna);
            });
        })
        .catch(error => {
            //Si hay un error al cargar los productos, se muestra un mensaje en la consola y en el html
            console.error(error);
            contenedorProductos.innerHTML = `<h3 class="text-danger text-center bg-body pt-5 pb-5">No se pudieron cargar los productos</h3>`;
        })
}


//imagenes cards cambia opacidad al pasar el mouse por encima y vuelve a la normalidad al quitar el mouse
const contenedor = document.getElementById("contenedorProductos");

contenedor.addEventListener("mouseover", function (evento) {
    if (evento.target.classList.contains("card-img-top")) {
        evento.target.style.opacity = "0.7";
    }
});

contenedor.addEventListener("mouseout", function (evento) {
    if (evento.target.classList.contains("card-img-top"))
        evento.target.style.opacity = "1";
});


//Logica del carrito

let totalDinero = 0;
const listaCarrito = document.getElementById("listaCarrito");
const listaCarritoModal = document.getElementById("listaCarritoModal");
const total = document.getElementById("totalCarrito");
const totalCarritoModal = document.getElementById("totalCarritoModal");


function agregarAlCarrito(nombre, precio) {
    //se suma el precio del producto al total
    totalDinero += precio;
    total.textContent = totalDinero;
    totalCarritoModal.textContent = totalDinero;

    //se crea un nuevo elemento en la lista del carrito
    const nuevoElemento = document.createElement("li");
    nuevoElemento.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "text-dark");
    nuevoElemento.innerHTML = `<span>${nombre} </span><div>
    <span class="fw-bold me-3">$${precio}</span>
    <button class="btn btn-danger btn-sm boton-eliminar">X</button>
    </div>`;

    //se crea un evento para eliminar el producto del carrito
    const botonEliminar = nuevoElemento.querySelector(".boton-eliminar");

    botonEliminar.addEventListener("click", function () {
        //se resta el precio del producto al total
        totalDinero -= precio;
        total.textContent = totalDinero;
        totalCarritoModal.textContent = totalDinero;
        //se elimina el producto del carrito
        nuevoElemento.remove();
        listaCarritoModal.innerHTML = listaCarrito.innerHTML;

    })
    //se agrega el producto a la lista del carrito
    listaCarrito.appendChild(nuevoElemento);
    listaCarritoModal.innerHTML = listaCarrito.innerHTML;

}

//Logica del boton pagar
const botonPagar = document.getElementById("botonPagar");


botonPagar.addEventListener("click", function () {
    alert("¡Gracias por tu compra! ");
    reiniciarCarrito();

})

//Logica de vaciar carrito
const botonVaciar = document.getElementById("botonVaciar");
botonVaciar.addEventListener("click", function () {
    reiniciarCarrito();
})

function reiniciarCarrito() {
    listaCarrito.innerHTML = "";
    listaCarritoModal.innerHTML = "";
    totalDinero = 0;
    total.textContent = "0";
}

// Logica del buscador

const buscador = document.getElementById("buscador");
const inputBusqueda = document.getElementById("inputBusqueda");

buscador.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // se obtiene el valor del buscador en minusculas y se eliminan los espacios
    const busqueda = inputBusqueda.value.toLowerCase().trim();

    //se seleccionan todas las tarjetas de videojuegos
    const tarjetas = document.querySelectorAll("#contenedorProductos .col-12");

    let juegosEncontrados = 0;

    //se recorren todas las tarjetas
    tarjetas.forEach(tarjeta => {

        //se obtiene el titulo del videojuego en minusculas y se eliminan los espacios
        const tituloJuego = tarjeta.querySelector(".card-title").textContent.toLowerCase().trim();

        //se verifica si el titulo del videojuego incluye la busqueda
        if (tituloJuego.includes(busqueda)) {

            tarjeta.style.display = "block";
            juegosEncontrados++;

        } else {
            tarjeta.style.display = "none";
        }
    })

    if (juegosEncontrados === 0) {
        alert("No se encontraron resultados para la busqueda: " + busqueda);
    }

    //se desplaza hacia la seccion de productos
    document.getElementById("contenedorProductos").scrollIntoView({ behavior: 'smooth' });
})

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
            contenedorResenas.innerHTML = `<h3 class="text-danger bg-body pt-5 pb-5 text-center">No se pudieron cargar las reseñas</h3>`;
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

cargarProductos();
cargarResena();