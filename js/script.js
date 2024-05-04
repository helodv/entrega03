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
    };
};

// array de productos
let productos = [
    // id, nombre, marca, modelo, categoria, stock, precio, imagen
    new Producto(1, "MSI B450 Gaming Max", "MSI", 'B450 Gaming Max', "motherboard", 0, 45199, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(2, "ASUS ROG Strix B550-F Gaming", "ASUS", "ROG Strix B550-F", "motherboard", 8, 18999, "../assets/images/productos/mb_asus_rog_strix_gaming.webp"),
    new Producto(3, "GIGABYTE B450 AORUS PRO", "GIGABYTE", "B450 AORUS PRO", "motherboard", 12, 8999, "../assets/images/productos/mb_gigabyte_b450_aorus_pro.png"),
    new Producto(4, "MSI MPG Z590 GAMING EDGE WIFI", "MSI", "MPG Z590 GAMING EDGE WIFI", "motherboard", 6, 21999, "../assets/images/productos/msi_mpg_z590_gaming_edge_wifi.png"),
    new Producto(5, "ASRock B560M-ITX/ac", "ASRock", "B560M-ITX/ac", "motherboard", 3, 12999, "../assets/images/productos/mb_asrock_b560m_itx.png"),
    new Producto(6, "AMD Ryzen 7 5800X", "AMD", "Ryzen 7 5800X", "procesador", 10, 29999, "../assets/images/productos/ryzen7.webp"),
    new Producto(7, "Intel Core i5-11600K", "Intel", "Core i5-11600K", "procesador", 7, 24999, "../assets/images/productos/i5.jpg"),
    new Producto(8, "AMD Ryzen 9 5950X", "AMD", "Ryzen 9 5950X", "procesador", 4, 69999, "../assets/images/productos/ryzen9.webp"),
    new Producto(9, "Intel Core i9-11900KF", "Intel", "Core i9-11900KF", "procesador", 2, 79999, "../assets/images/productos/i9.jpg"),
    new Producto(10, "AMD Ryzen 5 5600G", "AMD", "Ryzen 5 5600G", "procesador", 15, 17999, "../assets/images/productos/ryzen5.jpg"),
    new Producto(11, "Corsair Vengeance LPX 16GB DDR4 3200MHz", "Corsair", "Vengeance LPX", "memoria RAM", 20, 6999, "../assets/images/productos/ram_corsair_vengeance_lpx_16gb_dddr4_3200mhz.jpg"),
    new Producto(12, "Crucial Ballistix 32GB DDR4 3600MHz", "Crucial", "Ballistix", "memoria RAM", 15, 12999, "../assets/images/productos/ram_crucial_ballistix_32gb_ddr4_3600mhz.jpg"),
    new Producto(13, "G.Skill Ripjaws V 64GB DDR4 3200MHz", "G.Skill", "Ripjaws V", "memoria RAM", 8, 24999, "../assets/images/productos/ram_gskill_ripjaws_v_64gb_ddr4_3200mhz.jpg"),
    new Producto(14, "HyperX Fury RGB 16GB DDR4 2666MHz", "HyperX", "Fury RGB", "memoria RAM", 25, 7999, "../assets/images/productos/ram_hyperx_fury_rgb_16gb_ddr4_2666mhz.jpg"),
    new Producto(15, "Team T-Force Delta RGB 32GB DDR4 3000MHz", "Team T-Force", "Delta RGB", "memoria RAM", 10, 10999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(16, "NVIDIA GeForce RTX 4070 Super", "NVIDIA", "GeForce RTX 4070 Super", "graphics card", 5, 45199, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(17, "AMD Radeon RX 7900 GRE", "AMD", "Radeon RX 7900 GRE", "graphics card", 8, 18999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(18, "NVIDIA GeForce RTX 4070", "NVIDIA", "GeForce RTX 4070", "graphics card", 12, 8999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(19, "NVIDIA GeForce RTX 4090", "NVIDIA", "GeForce RTX 4090", "graphics card", 6, 21999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(20, "AMD Radeon RX 7900 XTX", "AMD", "Radeon RX 7900 XTX", "graphics card", 3, 12999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(21, "Seagate Barracuda 4TB", "Seagate", "Barracuda", "almacenamiento", 5, 8999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(22, "Western Digital Blue 2TB", "Western Digital", "Blue", "almacenamiento", 8, 6999, "../assets/images/productos/motherboard_generic.jpg"),
    new Producto(23, "Toshiba P300 3TB", "Toshiba", "P300", "almacenamiento", 12, 7999, "../assets/images/productos/motherboard_generic.jpg")
];

//------------------------------------------------------------------

// vacia el div de tarjetas
function vaciarDiv() {
    contenedorTarjetas = document.getElementById("containerTarjetas");
    contenedorTarjetas.innerHTML = "";
    return contenedorTarjetas;
}

// lista Todos los productos
function listarTodos(productos, carrito) {
    vaciarDiv();
    productosListados = [];
    let productosOrdenados = productos.map(producto => producto);
    listarTarjeta(productosOrdenados, contenedorTarjetas, carrito);
    productosListados.push(...productosOrdenados);
}

// lista por categorías
function filtrarPorCategoria(productos, categoria, carrito) {
    vaciarDiv();
    productosListados = [];
    let productosOrdenados = productos.filter(producto => producto.categoria === categoria);
    listarTarjeta(productosOrdenados, contenedorTarjetas, carrito);
    productosListados.push(...productosOrdenados);
}

// busca productos
function buscarProductos(productos, textoBusqueda, carrito) {
    vaciarDiv();
    productosListados = [];
    let productosOrdenados = productos.filter(producto => {
        let nombreCoincide = producto.nombre.toLowerCase().includes(textoBusqueda);
        let categoriaCoincide = producto.categoria.toLowerCase().includes(textoBusqueda);
        let marcaCoincide = producto.marca.toLowerCase().includes(textoBusqueda);
        let modeloCoincide = producto.modelo.toLowerCase().includes(textoBusqueda);
        return nombreCoincide || categoriaCoincide || marcaCoincide || modeloCoincide;
    });
    listarTarjeta(productosOrdenados, contenedorTarjetas, carrito);
    productosListados.push(...productosOrdenados);
}

// selector Sort acomodar por:
const opcionSort = (opcion, carrito) => {
    opcion.addEventListener("change", () => {
        let opcionSeleccionada = opcion.value;
        switch (opcionSeleccionada) {
            case "precioMayorAMenor":
                vaciarDiv();
                productosListados.sort((a, b) => b.precio - a.precio);
                listarTarjeta(productosListados, contenedorTarjetas, carrito);
                productosListados.push;
                break;
            case "precioMenorAMayor":
                vaciarDiv();
                productosListados.sort((a, b) => a.precio - b.precio);
                listarTarjeta(productosListados, contenedorTarjetas, carrito);
                productosListados.push;
                break;
            case "NombreAaZ":
                vaciarDiv();
                productosListados.sort((a, b) => a.nombre.localeCompare(b.nombre));
                listarTarjeta(productosListados, contenedorTarjetas, carrito);
                productosListados.push;
                break;
            case "NombreZaA":
                vaciarDiv();
                productosListados.sort((a, b) => b.nombre.localeCompare(a.nombre));
                listarTarjeta(productosListados, contenedorTarjetas, carrito);
                productosListados.push(...productosOrdenados);
                break;
            default:
                break;
        }
    });
};

//generador de tarjeta
function listarTarjeta(productos, contenedor, carrito) {
    let contenedorSort = document.getElementById("opcionSort");
    contenedorTarjetas.className = "";
    contenedorSort.style.display = "flex";
    productos.forEach(producto => {
        if (producto.stock > 0) {
            let tarjetaProducto = document.createElement("div");
            tarjetaProducto.className = "tarjeta-producto";
            tarjetaProducto.innerHTML =
                `
                <img id="imagenTarjeta" src=${producto.imagen} alt="Motherboard" class="tarjeta-producto-imagen">
                <h3 class="tarjeta-producto-nombre">${producto.nombre}</h3>
                <p class="tarjeta-producto-detalles">Marca: <span class="brand">${producto.marca}</span></p>
                <p class="tarjeta-producto-detalles">Modelo: <span class="model">${producto.modelo}</span></p>
                <p class="tarjeta-producto-detalles">Categoría: <span class="model">${producto.categoria}</span></p>
                <p class="tarjeta-producto-precio">$${producto.precio}</p>
                <div class="linea-separadora"></div>
                <div class="container-botones">
                    <button class="btn-producto btn-ver-producto">Ver</button>
                    <button class="btn-producto btn-agregar-al-carrito" id=btnAgregarAlCarrito${producto.id}>Agregar al carrito</button>
                </div>
                `;
            contenedor.appendChild(tarjetaProducto);
            let btnAgregarAlCarrito = document.getElementById("btnAgregarAlCarrito" + producto.id);
            btnAgregarAlCarrito.addEventListener("click", (e) => agregarProductoAlCarrito(e, carrito, productos));
        }
    })
}

// Carrito 
function agregarProductoAlCarrito(e, carrito, productos) {
    let idProductoAgregado = Number(e.target.id.substring(19));
    let productoExisteEnCarrito = carrito.findIndex(producto => producto.id === idProductoAgregado);
    let productoBuscado = productos.find(producto => producto.id === idProductoAgregado);
    if (productoExisteEnCarrito !== -1) {
        carrito[productoExisteEnCarrito].cantidad++
        carrito[productoExisteEnCarrito].subtotal = carrito[productoExisteEnCarrito].precio * carrito[productoExisteEnCarrito].cantidad
    } else {
        carrito.push({
            id: productoBuscado.id,
            imagen: productoBuscado.imagen,
            nombre: productoBuscado.nombre,
            precio: productoBuscado.precio,
            cantidad: 1
        })
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    return carrito;
}

// listar carrito
function listarCarrito(carrito, contenedor) {
    contenedorTarjetas = document.getElementById("containerTarjetas");
    contenedorTarjetas.className = "tarjeta-carrito";
    contenedorTarjetas.innerHTML = `
    <h2 class="share-tech-regular">CARRITO</h2>
    `;
    precioTotal = 0;
    let contenedorSort = document.getElementById("opcionSort");
    contenedorSort.style.display = "none";
    carrito.forEach(producto => {
        let tarjetaProducto = document.createElement("div");
        tarjetaProducto.className = "tarjeta-producto-carrito";
        subtotal = producto.precio * producto.cantidad;
        tarjetaProducto.innerHTML =
            `
            <img id="imagenTarjeta" src=${producto.imagen} alt="Motherboard" class="tarjeta-carrito-imagen">
            <h3 class="tarjeta-carrito-nombre">${producto.nombre}</h3>
            <p class="tarjeta-carrito-cantidad">unidades: ${producto.cantidad}</p>
            <p class="tarjeta-carrito-precio">precio por unidad: $${producto.precio}</p>
            <p class="tarjeta-carrito-precio">subtotal: $${subtotal}</p>
            <button class="tarjeta-carrito-btn" id="eliminar${producto.id}">eliminar</button>
            `;
        contenedor.appendChild(tarjetaProducto);
        let botonEliminar = document.getElementById(`eliminar${producto.id}`);
        botonEliminar.onclick = () => {
            const indiceAEliminar = carrito.findIndex(item => item.id === producto.id);
            if (indiceAEliminar !== -1) {
                carrito.splice(indiceAEliminar, 1);
                localStorage.setItem("carrito", JSON.stringify(carrito));
                listarCarrito(carrito, contenedorTarjetas)
            }
        };
        precioTotal += subtotal;
    });
    let tarjetaPrecioTotal = document.createElement("div");
    tarjetaPrecioTotal.className = "tarjeta-producto-carrito";
    tarjetaPrecioTotal.innerHTML =
        `
    <div class="carrito-comprar>
    <p">TOTAL: ${precioTotal} </p>
    <button class="tarjeta-carrito-btn">comprar</button>
    </div>
    `
    contenedor.appendChild(tarjetaPrecioTotal);
}
// funcion principal
function principal() {
    let carrito = [];
    let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));
    if (carritoLocalStorage) {
        carrito = carritoLocalStorage;
    }
    listarTodos(productos, carrito);
    //boton carrito
    let btnCarrito = document.getElementById("btnCarrito")
    btnCarrito.onclick = () => listarCarrito(carrito, contenedorTarjetas)
    //boton todos los productos
    let btnMenuPrincipalProductos = document.getElementById("btnMenuPrincipalProductos");
    btnMenuPrincipalProductos.onclick = () => listarTodos(productos, carrito);
    //boton motherboards
    let btnCategoriasMotherboards = document.getElementById("btnCategoriasMotherboard");
    btnCategoriasMotherboards.onclick = () => filtrarPorCategoria(productos, "motherboard", carrito);
    //boton procesadores
    let btnCategoriasProcesador = document.getElementById("btnCategoriasProcesador");
    btnCategoriasProcesador.onclick = () => filtrarPorCategoria(productos, "procesador", carrito);
    //boton memorias
    let btnCategoriasMemoria = document.getElementById("btnCategoriasMemoria");
    btnCategoriasMemoria.onclick = () => filtrarPorCategoria(productos, "memoria RAM", carrito);
    // selector opciones sort
    let opcion = document.getElementsByClassName("selectorSort")[0];
    opcion.onclick = () => opcionSort(opcion, carrito);
    //input busqueda
    let inputBusqueda = document.getElementById("inputBuscar");
    inputBusqueda.addEventListener("keydown", function (event) {
        event.key === "Enter" && event.preventDefault();
        let textoBusqueda = inputBusqueda.value.toLowerCase();
        buscarProductos(productos, textoBusqueda, carrito);
    })
}

principal();
