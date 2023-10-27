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
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: 'Estás seguro?',
        text: "Se va a borrar todo el carrito actual!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, borrar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'El carrito se borró por completo!',
                'Ya podés volver a cargar tu compra 😄.',
                'success'
            )
            while(rellenoCarrito.firstChild){
                rellenoCarrito.removeChild(rellenoCarrito.firstChild)
            }
            productosCarrito = []
            updateStorage()
        } else if (result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelado!',
                    'Tu carrito sigue guardado 🌟.',
                    'success'
                )
            }
        })
}

function updateStorage(){
    localStorage.setItem("shop", JSON.stringify(productosCarrito))
}


// --------- Formulario Contacto ----------- //

const formContacto = document.querySelector("#form")

formContacto.addEventListener("submit", reaccionSubmit)

async function reaccionSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const respuesta = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "Accept": "application/json"
        }
    })
    if (respuesta.ok){
        formContacto.reset()
    }
}
