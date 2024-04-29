// clase constructora de productos
class Producto {
    constructor(id, nombre, marca, modelo, categoria, stock, precio, imagen) {
        this.id = id,
            this.nombre = nombre,
            this.marca = marca,
            this.modelo = modelo,
            this.categoria = categoria,
            this.stock = stock,
            this.precio = precio,
            this.imagen = imagen
    }
}

// array de productos
let productos = [
    // id, nombre, marca, modelo, categoria, stock, precio
    new Producto(1, "MSI B450 Gaming Max", "MSI", 'B450 Gaming Max', "motherboard", 0, 45199, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(2, "ASUS ROG Strix B550-F Gaming", "ASUS", "ROG Strix B550-F", "motherboard", 8, 18999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(3, "GIGABYTE B450 AORUS PRO", "GIGABYTE", "B450 AORUS PRO", "motherboard", 12, 8999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(4, "MSI MPG Z590 GAMING EDGE WIFI", "MSI", "MPG Z590 GAMING EDGE WIFI", "motherboard", 6, 21999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(5, "ASRock B560M-ITX/ac", "ASRock", "B560M-ITX/ac", "motherboard", 3, 12999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(6, "AMD Ryzen 7 5800X", "AMD", "Ryzen 7 5800X", "procesador", 10, 29999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(7, "Intel Core i5-11600K", "Intel", "Core i5-11600K", "procesador", 7, 24999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(8, "AMD Ryzen 9 5950X", "AMD", "Ryzen 9 5950X", "procesador", 4, 69999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(9, "Intel Core i9-11900KF", "Intel", "Core i9-11900KF", "procesador", 2, 79999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(10, "AMD Ryzen 5 5600G", "AMD", "Ryzen 5 5600G", "procesador", 15, 17999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(11, "Corsair Vengeance LPX 16GB DDR4 3200MHz", "Corsair", "Vengeance LPX", "memoria RAM", 20, 6999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(12, "Crucial Ballistix 32GB DDR4 3600MHz", "Crucial", "Ballistix", "memoria RAM", 15, 12999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(13, "G.Skill Ripjaws V 64GB DDR4 3200MHz", "G.Skill", "Ripjaws V", "memoria RAM", 8, 24999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(14, "HyperX Fury RGB 16GB DDR4 2666MHz", "HyperX", "Fury RGB", "memoria RAM", 25, 7999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(15, "Team T-Force Delta RGB 32GB DDR4 3000MHz", "Team T-Force", "Delta RGB", "memoria RAM", 10, 10999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(16, "NVIDIA GeForce RTX 4070 Super", "NVIDIA", "GeForce RTX 4070 Super", "graphics card", 5, 45199, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(17, "AMD Radeon RX 7900 GRE", "AMD", "Radeon RX 7900 GRE", "graphics card", 8, 18999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(18, "NVIDIA GeForce RTX 4070", "NVIDIA", "GeForce RTX 4070", "graphics card", 12, 8999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(19, "NVIDIA GeForce RTX 4090", "NVIDIA", "GeForce RTX 4090", "graphics card", 6, 21999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(20, "AMD Radeon RX 7900 XTX", "AMD", "Radeon RX 7900 XTX", "graphics card", 3, 12999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(21, "Seagate Barracuda 4TB", "Seagate", "Barracuda", "almacenamiento", 5, 8999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(22, "Western Digital Blue 2TB", "Western Digital", "Blue", "almacenamiento", 8, 6999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(23, "Toshiba P300 3TB", "Toshiba", "P300", "almacenamiento", 12, 7999, "../assets/images/productos/motherboard_generic.jpg"),
]

// array creado por cada filtro que se hace en el sitio
let productosListados = []
//------------------------------------------------------------------


// vacia el div antes de volver a listar
function vaciarDiv() {
    let contenedorTarjetas = document.getElementById("contenedor-tarjetas");
    contenedorTarjetas.className = "container-tarjeta";
    contenedorTarjetas.innerHTML = "";
    return contenedorTarjetas
}

// lista Todos los productos
function listarTodos(arr) {
    productosListados = [];
    //vacia el div
    let contenedorTarjetas = vaciarDiv();
    //listar todos los productos
    arr.forEach(producto => {
        if (producto.stock > 0) {
            listarTarjeta(producto, contenedorTarjetas);
            productosListados.push(producto);
        }
    });
}

// Filtra por categorías
function filtrarPorCategoria(arr, categoria) {
    productosListados = [];
    //vacia el div
    let contenedorTarjetas = vaciarDiv();
    // Filtrar por categorías
    let productosFiltrados = arr.filter(item => item.categoria === categoria);
    productosFiltrados.forEach(producto => {
        if (producto.stock > 0) {
            listarTarjeta(producto, contenedorTarjetas);
        }
    });
    productosListados.push(...productosFiltrados)
}

// busca productos
function buscarProductos(arr) {
    productosListados = [];
    // Vacía el div
    let contenedorTarjetas = vaciarDiv();
    // Filtrar por búsqueda
    let inputBusqueda = document.getElementById("inputBuscar");
    let textoBusqueda = inputBusqueda.value.toLowerCase();
    let productosFiltrados = arr.filter(producto => {
        let nombreCoincide = producto.nombre.toLowerCase().includes(textoBusqueda);
        let categoriaCoincide = producto.categoria.toLowerCase().includes(textoBusqueda);
        let marcaCoincide = producto.marca.toLowerCase().includes(textoBusqueda);
        let modeloCoincide = producto.modelo.toLowerCase().includes(textoBusqueda);
        return nombreCoincide || categoriaCoincide || marcaCoincide || modeloCoincide;
    });
    productosFiltrados.forEach(producto => {
        if (producto.stock > 0) {
            listarTarjeta(producto, contenedorTarjetas);
        }
    });
    productosListados.push(...productosFiltrados)
}

// selector Sort acomodar por:
let opcionSort = (opcion) => {
    opcion.addEventListener("change", () => {
        let opcionSeleccionada = opcion.value;
        switch (opcionSeleccionada) {
            case "precioMayorAMenor":
                console.log("precioMayor")
                listarPorPrecioMayor(productosListados);
                break;
            case "precioMenorAMayor":
                listarPorPrecioMenor(productosListados);
                break;
            case "NombreAaZ":
                listarPorNombreAZ(productosListados);
                break;
            case "NombreZaA":
                listarPorNombreZA(productosListados);
                break;
            default:
                break;
        }
    });
};

// NOMBRE: A-Z
function listarPorNombreAZ(arr) {
    //vacia el div
    let contenedorTarjetas = vaciarDiv();
    // Ordena los productos alfabéticamente por nombre
    let productosOrdenados = arr.sort((a, b) => a.nombre.localeCompare(b.nombre));
    productosOrdenados.forEach(producto => {
        if (producto.stock > 0) {
            listarTarjeta(producto, contenedorTarjetas);
        }
    });
}

// NOMBRE: Z-A
function listarPorNombreZA(arr) {
    //vacia el div
    let contenedorTarjetas = vaciarDiv();
    // Ordenar los productos alfabéticamente de forma descendente (Z-A)
    let productosOrdenados = arr.sort((a, b) => b.nombre.localeCompare(a.nombre));
    productosOrdenados.forEach(producto => {
        if (producto.stock > 0) {
            listarTarjeta(producto, contenedorTarjetas);
        }
    });
}

// PRECIO: MENOR a MAYOR
function listarPorPrecioMenor(arr) {
    //vacia el div
    let contenedorTarjetas = vaciarDiv();
    // Ordenar los productos por precio de menor a mayor
    let productosOrdenados = arr.sort((a, b) => a.precio - b.precio);
    contenedorTarjetas.innerHTML = ""
    productosOrdenados.forEach(producto => {
        if (producto.stock > 0) {
            listarTarjeta(producto, contenedorTarjetas);
        }
    });
}

// PRECIO: MAYOR a MENOR
function listarPorPrecioMayor(arr) {
    //vacia el div
    let contenedorTarjetas = vaciarDiv();
    // Ordenar los productos por precio de mayor a menor
    let productosOrdenados = arr.sort((a, b) => b.precio - a.precio);
    contenedorTarjetas.innerHTML = ""
    productosOrdenados.forEach(producto => {
        if (producto.stock > 0) {
            listarTarjeta(producto, contenedorTarjetas);
        }
    });
}

//generador de tarjeta
function listarTarjeta(producto, contenedor) {
    let tarjetaProducto = document.createElement("div");
    tarjetaProducto.className = "tarjeta-producto";
    tarjetaProducto.innerHTML =
        `
        <img id="imagenTarjeta" src=${producto.imagen} alt="Motherboard" class="tarjeta-producto-imagen">
        <div class="linea-separadora"></div>
        <h3 class="tarjeta-producto-nombre">${producto.nombre}</h3>
        <p class="tarjeta-producto-detalles">Marca: <span class="brand">${producto.marca}</span></p>
        <p class="tarjeta-producto-detalles">Modelo: <span class="model">${producto.modelo}</span></p>
        <p class="tarjeta-producto-detalles">Categoría: <span class="model">${producto.categoria}</span></p>
        <p class="tarjeta-producto-precio">$${producto.precio}</p>
        <div class="linea-separadora"></div>
        <div class="container-botones">
            <button class="btn-producto btn-ver-producto">Ver</button>
            <button class="btn-producto btn-agregar-al-carrito">Agregar al carrito</button>
        </div>
        `;
    contenedor.appendChild(tarjetaProducto);
}

// funcion principal
function principal() {

    //lista todos los productos
    listarTodos(productos);
    buscarProductos
    // BOTONES
    //Botones Menu Principal
    let btnMenuPrincipalProductos = document.getElementById("btnMenuPrincipalProductos");
    btnMenuPrincipalProductos.onclick = () => listarTodos(productos);

    // Botones del Menu Categorias
    //boton motherboards
    let btnCategoriasMotherboards = document.getElementById("btnCategoriasMotherboard");
    btnCategoriasMotherboards.onclick = () => filtrarPorCategoria(productos, "motherboard");
    //boton procesadores
    let btnCategoriasProcesador = document.getElementById("btnCategoriasProcesador");
    btnCategoriasProcesador.onclick = () => filtrarPorCategoria(productos, "procesador");
    //boton memorias
    let btnCategoriasMemoria = document.getElementById("btnCategoriasMemoria");
    btnCategoriasMemoria.onclick = () => filtrarPorCategoria(productos, "memoria RAM");

    // boton Buscar

    let btnBuscar = document.getElementById("btnBuscar");
    btnBuscar.onclick = () => buscarProductos(productos);

    // selector opciones sort
    let opcion = document.getElementsByClassName("selectorSort")[0];
    opcion.onclick = () => opcionSort(opcion);
}

//-----------------------------------------------------------------------------
//Ejecucion
principal()



