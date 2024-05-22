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
    listarTarjeta(productosOrdenados, contenedorTarjetas, carrito, productos)
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
    listarTarjeta(productosOrdenados, contenedorTarjetas, carrito, productos)
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
async function principal() {
    fetch("../json/productos.json")
    .then(response =>  response.json())
    .then(productos => {
        return productos
    })
    const response = await fetch("../json/productos.json")
    const productos = await response.json()   
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
    //boton placas de video
    const btnCategoriasVideo = document.getElementById("btnCategoriasVideo")
    btnCategoriasVideo.onclick = () => filtrarPorCategoria(productos, "video", carrito)
    //boton placas de video
    const btnCategoriasAlmacenamiento = document.getElementById("btnCategoriasAlmacenamiento")
    btnCategoriasAlmacenamiento.onclick = () => filtrarPorCategoria(productos, "almacenamiento", carrito)
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
