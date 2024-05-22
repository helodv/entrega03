// array de productos
let productos = [
    // id, nombre, marca, modelo, categoria, stock, precio, imagen
    { id: 1, nombre: "MSI B450 Gaming Max", marca: "MSI", modelo: 'B450 Gaming Max', categoria: "motherboard", stock: 0, precio: 45199, imagen: "../assets/images/productos/motherboard_generic.jpg" },
    { id: 3, nombre: "GIGABYTE B450 AORUS PRO", marca: "GIGABYTE", modelo: "B450 AORUS PRO", categoria: "motherboard", stock: 12, precio: 8999, imagen: "../assets/images/productos/mb_gigabyte_b450_aorus_pro.png" },
    { id: 2, nombre: "ASUS ROG Strix B550-F Gaming", marca: "ASUS", modelo: "ROG Strix B550-F", categoria: "motherboard", stock: 1, precio: 18999, imagen: "../assets/images/productos/mb_asus_rog_strix_gaming.webp" },
    { id: 4, nombre: "MSI MPG Z590 GAMING EDGE WIFI", marca: "MSI", modelo: "MPG Z590 GAMING EDGE WIFI", categoria: "motherboard", stock: 6, precio: 21999, imagen: "../assets/images/productos/msi_mpg_z590_gaming_edge_wifi.png" },
    { id: 5, nombre: "ASRock B560M-ITX/ac", marca: "ASRock", modelo: "B560M-ITX/ac", categoria: "motherboard", stock: 3, precio: 12999, imagen: "../assets/images/productos/mb_asrock_b560m_itx.png" },
    { id: 6, nombre: "AMD Ryzen 7 5800X", marca: "AMD", modelo: "Ryzen 7 5800X", categoria: "procesador", stock: 10, precio: 29999, imagen: "../assets/images/productos/ryzen7.webp" },
    { id: 7, nombre: "Intel Core i5-11600K", marca: "Intel", modelo: "Core i5-11600K", categoria: "procesador", stock: 7, precio: 24999, imagen: "../assets/images/productos/i5.jpg" },
    { id: 8, nombre: "AMD Ryzen 9 5950X", marca: "AMD", modelo: "Ryzen 9 5950X", categoria: "procesador", stock: 4, precio: 69999, imagen: "../assets/images/productos/ryzen9.webp" },
    { id: 9, nombre: "Intel Core i9-11900KF", marca: "Intel", modelo: "Core i9-11900KF", categoria: "procesador", stock: 2, precio: 79999, imagen: "../assets/images/productos/i9.jpg" },
    { id: 10, nombre: "AMD Ryzen 5 5600G", marca: "AMD", modelo: "Ryzen 5 5600G", categoria: "procesador", stock: 15, precio: 17999, imagen: "../assets/images/productos/ryzen5.jpg" },
    { id: 11, nombre: "Corsair Vengeance LPX 16GB DDR4 3200MHz", marca: "Corsair", modelo: "Vengeance LPX", categoria: "memoria RAM", stock: 20, precio: 6999, imagen: "../assets/images/productos/ram_corsair_vengeance_lpx_16gb_dddr4_3200mhz.jpg" },
    { id: 12, nombre: "Crucial Ballistix 32GB DDR4 3600MHz", marca: "Crucial", modelo: "Ballistix", categoria: "memoria RAM", stock: 15, precio: 12999, imagen: "../assets/images/productos/ram_crucial_ballistix_32gb_ddr4_3600mhz.jpg" },
    { id: 13, nombre: "G.Skill Ripjaws V 64GB DDR4 3200MHz", marca: "G.Skill", modelo: "Ripjaws V", categoria: "memoria RAM", stock: 8, precio: 24999, imagen: "../assets/images/productos/ram_gskill_ripjaws_v_64gb_ddr4_3200mhz.jpg" },
    { id: 14, nombre: "HyperX Fury RGB 16GB DDR4 2666MHz", marca: "HyperX", modelo: "Fury RGB", categoria: "memoria RAM", stock: 25, precio: 7999, imagen: "../assets/images/productos/ram_hyperx_fury_rgb_16gb_ddr4_2666mhz.jpg" },
    { id: 15, nombre: "Team T-Force Delta RGB 32GB DDR4 3000MHz", marca: "Team T-Force", modelo: "Delta RGB", categoria: "memoria RAM", stock: 10, precio: 10999, imagen: "../assets/images/productos/motherboard_generic.jpg" },
    { id: 16, nombre: "NVIDIA GeForce RTX 4070 Super", marca: "NVIDIA", modelo: "GeForce RTX 4070 Super", categoria: "video", stock: 5, precio: 45199, imagen: "../assets/images/productos/motherboard_generic.jpg" },
    { id: 17, nombre: "AMD Radeon RX 7900 GRE", marca: "AMD", modelo: "Radeon RX 7900 GRE", categoria: "video", stock: 8, precio: 18999, imagen: "../assets/images/productos/motherboard_generic.jpg" },
    { id: 18, nombre: "NVIDIA GeForce RTX 4070", marca: "NVIDIA", modelo: "GeForce RTX 4070", categoria: "video", stock: 12, precio: 8999, imagen: "../assets/images/productos/motherboard_generic.jpg" },
    { id: 19, nombre: "NVIDIA GeForce RTX 4090", marca: "NVIDIA", modelo: "GeForce RTX 4090", categoria: "video", stock: 6, precio: 21999, imagen: "../assets/images/productos/motherboard_generic.jpg" },
    { id: 20, nombre: "AMD Radeon RX 7900 XTX", marca: "AMD", modelo: "Radeon RX 7900 XTX", categoria: "video", stock: 3, precio: 12999, imagen: "../assets/images/productos/motherboard_generic.jpg" },
    { id: 21, nombre: "Seagate Barracuda 4TB", marca: "Seagate", modelo: "Barracuda", categoria: "almacenamiento", stock: 5, precio: 8999, imagen: "../assets/images/productos/motherboard_generic.jpg" },
    { id: 22, nombre: "Western Digital Blue 2TB", marca: "Western Digital", modelo: "Blue", categoria: "almacenamiento", stock: 8, precio: 6999, imagen: "../assets/images/productos/motherboard_generic.jpg" },
    { id: 23, nombre: "Toshiba P300 3TB", marca: "Toshiba", modelo: "P300", categoria: "almacenamiento", stock: 12, precio: 7999, imagen: "../assets/images/productos/motherboard_generic.jpg" }
]


//------------------------------------------------------------------

// vacia el div de tarjetas
function vaciarDiv() {
    contenedorTarjetas = document.getElementById("containerTarjetas")
    contenedorTarjetas.innerHTML = ""
    return contenedorTarjetas
}

// lista Todos los productos
function listarTodos(productos, carrito) {
    vaciarDiv()
    productosListados = []
    const productosOrdenados = productos.map(producto => producto)
    listarTarjeta(productosOrdenados, contenedorTarjetas, carrito)
    productosListados.push(...productosOrdenados)
}

// lista por categorías
function filtrarPorCategoria(productos, categoria, carrito) {
    vaciarDiv()
    productosListados = []
    const productosOrdenados = productos.filter(producto => producto.categoria === categoria)
    listarTarjeta(productosOrdenados, contenedorTarjetas, carrito)
    productosListados.push(...productosOrdenados)
}

// busca productos
function buscarProductos(productos, textoBusqueda, carrito) {
    vaciarDiv()
    productosListados = []
    const productosOrdenados = productos.filter(producto => {
        const nombreCoincide = producto.nombre.toLowerCase().includes(textoBusqueda)
        const categoriaCoincide = producto.categoria.toLowerCase().includes(textoBusqueda)
        const marcaCoincide = producto.marca.toLowerCase().includes(textoBusqueda)
        const modeloCoincide = producto.modelo.toLowerCase().includes(textoBusqueda)
        return nombreCoincide || categoriaCoincide || marcaCoincide || modeloCoincide
    })
    listarTarjeta(productosOrdenados, contenedorTarjetas, carrito)
    productosListados.push(...productosOrdenados)
}

// selector Sort acomodar por:
const opcionSort = (opcion, carrito) => {
    opcion.addEventListener("change", () => {
        const opcionSeleccionada = opcion.value
        switch (opcionSeleccionada) {
            case "precioMayorAMenor":
                vaciarDiv()
                productosListados.sort((a, b) => b.precio - a.precio)
                listarTarjeta(productosListados, contenedorTarjetas, carrito)
                productosListados.push
                break
            case "precioMenorAMayor":
                vaciarDiv()
                productosListados.sort((a, b) => a.precio - b.precio)
                listarTarjeta(productosListados, contenedorTarjetas, carrito)
                productosListados.push
                break
            case "NombreAaZ":
                vaciarDiv()
                productosListados.sort((a, b) => a.nombre.localeCompare(b.nombre))
                listarTarjeta(productosListados, contenedorTarjetas, carrito)
                productosListados.push
                break
            case "NombreZaA":
                vaciarDiv()
                productosListados.sort((a, b) => b.nombre.localeCompare(a.nombre))
                listarTarjeta(productosListados, contenedorTarjetas, carrito)
                productosListados.push
                break
            default:
                break
        }
    })
}

//generador de tarjeta
function listarTarjeta(productos, contenedor, carrito) {
    const contenedorSort = document.getElementById("opcionSort")
    contenedorTarjetas.className = ""
    contenedorSort.style.display = "flex"
    productos.forEach(producto => {
        if (producto.stock > 0) {
            const tarjetaProducto = document.createElement("div")
            tarjetaProducto.className = "tarjeta-producto"
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
                `
            contenedor.appendChild(tarjetaProducto)
            const btnAgregarAlCarrito = document.getElementById("btnAgregarAlCarrito" + producto.id)
            btnAgregarAlCarrito.addEventListener("click", (e) => {
                agregarProductoAlCarrito(e, carrito, productos)
                Swal.fire({
                    icon: "success",
                    title: "Carrito",
                    text: "producto agregado al carrito exitosamente",
                })
            })
        }
    })
}


// Carrito 
function agregarProductoAlCarrito(e, carrito, productos) {
    const idProductoAgregado = Number(e.target.id.substring(19))
    const productoExisteEnCarrito = carrito.findIndex(producto => producto.id === idProductoAgregado)
    const productoBuscado = productos.find(producto => producto.id === idProductoAgregado)
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
    localStorage.setItem("carrito", JSON.stringify(carrito))
    return carrito
}

// listar carrito
function listarCarrito(carrito, contenedor) {
    carrito = cargarCarrito()
    contenedorTarjetas = document.getElementById("containerTarjetas")
    contenedorTarjetas.className = "tarjeta-carrito"
    contenedorTarjetas.innerHTML =
        `
    <h2 class="share-tech-regular">CARRITO</h2>
    `
    let precioTotal = 0
    const contenedorSort = document.getElementById("opcionSort")
    contenedorSort.style.display = "none"
    carrito.forEach(producto => {
        const tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "tarjeta-producto-carrito"
        const subtotal = producto.precio * producto.cantidad
        tarjetaProducto.innerHTML =
            `
            <img id="imagenTarjeta" src=${producto.imagen} alt="Motherboard" class="tarjeta-carrito-imagen">
            <h3 class="tarjeta-carrito-nombre">${producto.nombre}</h3>
            <p class="tarjeta-carrito-cantidad">unidades: ${producto.cantidad}</p>
            <p class="tarjeta-carrito-precio">precio por unidad: $${producto.precio}</p>
            <p class="tarjeta-carrito-precio">subtotal: $${subtotal}</p>
            <button class="tarjeta-carrito-btn" id="eliminar${producto.id}">eliminar</button>
            `
        contenedor.appendChild(tarjetaProducto)
        const botonEliminar = document.getElementById(`eliminar${producto.id}`)
        botonEliminar.onclick = () => {
            const productoAEliminar = carrito.findIndex(prod => prod.id === producto.id)
            if (productoAEliminar !== -1) {
                carrito.splice(productoAEliminar, 1)
                localStorage.setItem("carrito", JSON.stringify(carrito))
                listarCarrito(carrito, contenedorTarjetas)
            }
        }
        precioTotal += subtotal
    })
    const tarjetaPrecioTotal = document.createElement("div")
    tarjetaPrecioTotal.className = "tarjeta-producto-carrito"
    tarjetaPrecioTotal.innerHTML =
        `
    <div class="carrito-comprar>
    <p">TOTAL: ${precioTotal} </p>
    <button class="tarjeta-carrito-btn" id="btnComprarCarrito">comprar</button>
    </div>
    `
    contenedor.appendChild(tarjetaPrecioTotal)
    let botonComprarCarrito = document.getElementById("btnComprarCarrito")
    botonComprarCarrito.onclick = () => {
        if (carrito.length < 1) {
            Swal.fire({
                icon: "error",
                title: "Carrito vacío",
                text: "No hay ningún producto en el carrito",
            })
        } else {
            carrito.forEach(productoCarrito => {
                const productoEnStock = productos.find(producto => producto.id === productoCarrito.id)
                if (productoEnStock) {
                    productoEnStock.stock -= productoCarrito.cantidad
                }
            })
            localStorage.removeItem("carrito")
            carrito = []
            vaciarDiv()

            Swal.fire({
                icon: "success",
                title: "Compra Exitosa",
                text: "Le hemos enviado los detalles de la compra a su correo electrónico.",
            })
        }
    }
}

function cargarCarrito() {
    return carrito = JSON.parse(localStorage.getItem("carrito")) || []
}



// funcion principal
function principal() {

    let carrito = []
    let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"))
    if (carritoLocalStorage) {
        carrito = carritoLocalStorage
    }
    listarTodos(productos, carrito)
    //boton carrito
    const btnCarrito = document.getElementById("btnCarrito")
    btnCarrito.onclick = () => listarCarrito(carrito, contenedorTarjetas)
    //boton todos los productos
    const btnMenuPrincipalProductos = document.getElementById("btnMenuPrincipalProductos")
    btnMenuPrincipalProductos.onclick = () => listarTodos(productos, carrito)
    //boton motherboards
    const btnCategoriasMotherboards = document.getElementById("btnCategoriasMotherboard")
    btnCategoriasMotherboards.onclick = () => filtrarPorCategoria(productos, "motherboard", carrito)
    //boton procesadores
    const btnCategoriasProcesador = document.getElementById("btnCategoriasProcesador")
    btnCategoriasProcesador.onclick = () => filtrarPorCategoria(productos, "procesador", carrito)
    //boton memorias
    const btnCategoriasMemoria = document.getElementById("btnCategoriasMemoria")
    btnCategoriasMemoria.onclick = () => filtrarPorCategoria(productos, "memoria RAM", carrito)
    // selector opciones sort
    const opcion = document.getElementsByClassName("selectorSort")[0]
    opcion.onclick = () => opcionSort(opcion, carrito)
    //input busqueda
    const inputBusqueda = document.getElementById("inputBuscar")
    inputBusqueda.addEventListener("keydown", function (event) {
        event.key === "Enter" && event.preventDefault()
        const textoBusqueda = inputBusqueda.value.toLowerCase()
        buscarProductos(productos, textoBusqueda, carrito)
    })
}

principal()
