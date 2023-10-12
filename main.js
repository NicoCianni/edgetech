let productosCarrito = [];

const listaProductos = document.querySelector("#producto-main")

const rellenoCarrito = document.querySelector("#shop-list tbody")

const resetCarritoBtn = document.querySelector("#borrar-carrito")

const shop = document.querySelector("#shop-list")


document.addEventListener("DOMContentLoaded", ()=>{
    if(JSON.parse(localStorage.getItem("shop")) === null){
        productosCarrito = []
    }else{
        productosCarrito = JSON.parse(localStorage.getItem("shop"))
    }
    rellenarCarritoHTML()
})

listaProductos.addEventListener("click", agregarAlCarrito)

resetCarritoBtn.addEventListener("click", resetCarrito)

shop.addEventListener("click", eliminarProducto)

function eliminarProducto(event){
    event.preventDefault();
    if(event.target.classList.contains("borrar-item")){
        const producto = event.target.parentElement.parentElement
        const productoId = producto.querySelector("button").getAttribute("id-num")
        productosCarrito = productosCarrito.filter(producto => producto.id !== productoId)
        rellenarCarritoHTML()
    }
}


function agregarAlCarrito(event){
    event.preventDefault()
    if(event.target.classList.contains("boton1")){
        const product = event.target.parentElement
        datosProducto(product)
        rellenarCarritoHTML();
    }
}

function datosProducto(item){
    const dataProducto = {
        imagen: item.querySelector("img").src,
        nombre: item.querySelector("h3").textContent,
        precio: item.querySelector("p").textContent,
        id: item.querySelector("a").getAttribute("id-num"),
        cantidad: 1
    }
    
    if(productosCarrito.some( product => product.id === dataProducto.id)){
        const articulos = productosCarrito.map( article => {
            if(article.id === dataProducto.id){
                let cantidad = article.cantidad
                cantidad +=1
                article.cantidad = cantidad
                return article
            }else {
                return article
            }
        })
        productosCarrito = articulos.slice()
    }else {
        productosCarrito.push(dataProducto)
    }

}

function rellenarCarritoHTML(){
    limpiarCarrito()
    productosCarrito.forEach(article => {
        const fila = document.createElement("tr")
        fila.classList.add("nueva-fila")
        fila.innerHTML = `
            <td><img src="${article.imagen}" width="60" /></td>
            <td>${article.nombre}</td>
            <td>${article.precio}</td>
            <td>${article.cantidad}</td>
            <td>
                <button class="borrar-item" id-num="${article.id}">Eliminar</button>
            </td>
        `
        rellenoCarrito.appendChild(fila)
    })
    updateStorage();
}


function limpiarCarrito(){
    while(rellenoCarrito.firstChild){
        rellenoCarrito.removeChild(rellenoCarrito.firstChild)
    }
}

function resetCarrito(){
    while(rellenoCarrito.firstChild){
        rellenoCarrito.removeChild(rellenoCarrito.firstChild)
    }
    productosCarrito = []
    updateStorage()
}

function updateStorage(){
    localStorage.setItem("shop", JSON.stringify(productosCarrito))
}