const carrito = [];

function actualizarCarrito() {
  const itemsCarrito = document.getElementById("items-carrito");
  itemsCarrito.innerHTML = "";

  let total = 0;
  carrito.forEach((producto) => {
    const listItem = document.createElement("li");

    // Crear una div para el contenido del producto
    const productoDiv = document.createElement("div");
    productoDiv.className = "producto-info";

    // Crear una imagen para el producto
    const imagenProducto = document.createElement("img");
    imagenProducto.src = producto.imagen; // Establece la URL de la imagen
    productoDiv.appendChild(imagenProducto);

    // Agregar el nombre del producto
    const nombreProducto = document.createElement("span");
    nombreProducto.className = "nombre-producto";
    nombreProducto.innerText = producto.nombre;
    productoDiv.appendChild(nombreProducto);

    // Agregar el precio del producto
    const precioProducto = document.createElement("span");
    precioProducto.className = "precio-producto";
    precioProducto.innerText = `$${producto.precio.toFixed(2)}`;
    productoDiv.appendChild(precioProducto);

    // Agregar el botón "Contactar"
    const botonContactar = document.createElement("button");
    botonContactar.innerText = "Contactar";
    botonContactar.className = "boton-contactar";
    botonContactar.onclick = function() {
      // Agrega aquí la lógica para contactar al vendedor o realizar una acción específica
      alert(`Contactando al vendedor de ${producto.nombre}`);
    };
    productoDiv.appendChild(botonContactar);

    listItem.appendChild(productoDiv);
    itemsCarrito.appendChild(listItem);

    total += producto.precio;
  });

  const totalCarrito = document.getElementById("total-carrito");
  totalCarrito.textContent = `$${total.toFixed(2)}`;
}

function abrirCarrito() {
  const carritoModal = document.getElementById("carrito-modal");
  carritoModal.style.display = "block";
  actualizarCarrito();
}

function cerrarCarrito() {
  const carritoModal = document.getElementById("carrito-modal");
  carritoModal.style.display = "none";
}

const botonAbrirCarrito = document.getElementById("abrir-carrito");
botonAbrirCarrito.addEventListener("click", abrirCarrito);

// Ejemplo de cómo agregar productos al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
}

// Agregar productos de ejemplo al carrito
agregarAlCarrito({ nombre: "Producto 1", precio: 10.00, imagen: "URL_de_la_imagen1" });
agregarAlCarrito({ nombre: "Producto 2", precio: 20.00, imagen: "URL_de_la_imagen2" });
