//Bienvenida de usuario//
let nombre = String(prompt("Ingrese su nombre de pila"))

if (nombre == "") {
    alert("No se ingresó ningun nombre");
}
else{
    console.log("¡Bienvenido/a " + nombre + ", a EdgeTech!")
}

console.log("¡Chequeá las ofertas que tenemos este mes!")


function Producto(articulo, precio, stock){
    this.articulo = articulo
    this.precio = precio
    this.stock = stock

    this.consulta = function(){
        console.log(this.articulo + " cuesta " + this.precio);
    }
}

const item1 = new Producto("Nvidia RTX 2060", 320000, "Si")
console.log(item1)
const item2 = new Producto("Nvidia RTX 2080ti", 350000, "Si")
console.log(item2)
const item3 = new Producto("Gabinete Aerocool Mecha", 28300, "Si")
console.log(item3)
const item4 = new Producto("Monitor Odyssey G4", 160000, "Si")
console.log(item4)
const item5 = new Producto("Intel I7 10ma", 190000, "No")
console.log(item5)
const item6 = new Producto("Mouse Logitech G502", 35800, "Si")
console.log(item6)
const item7 = new Producto("Monitor AOC 27 pulgadas", 120000, "Si")
console.log(item7)
const item8 = new Producto("Silla Aerocool Admiral", 210000, "Si")
console.log(item8)
const item9 = new Producto("Silla Corsair T3", 203000, "Si")
console.log(item9)
const item10 = new Producto("Procesador Ryzen 7", 160000, "Si")
console.log(item10)
const item11 = new Producto("Silla Gaming Noganet", 110000, "No")
console.log(item11)
const item12 = new Producto("Mouse Logitech G305", 22500, "No")
console.log(item12)

item4.consulta();
item10.consulta();
item12.consulta();

// HOF //

function pagoSeisCuotas(interes){
    return function(precio){
        console.log(item1.articulo + " cuesta " + interes*precio + " en 6 cuotas")
    }
}

const seisCuotas = pagoSeisCuotas(1.30);

seisCuotas(item1.precio);

//Catalogo//
let respuesta = String(prompt("¿Desea ver nuestras categorias de productos? Seleccione Si / No"))

let respuestaUsuario = respuesta;

if(respuesta.toLowerCase() === "si") {
    console.log("----Productos----")
    console.log("Tarjetas graficas")
    console.log("Sillas")
    console.log("Procesadores")
    console.log("Teclados")
    console.log("Gabinetes")
}
else if(respuesta.toLowerCase() === "no"){
    console.log("Lamentamos no contar con lo que buscabas, cualquier sugerencia dejanos un comentario en la seccion de Contacto |EdgeTech|");
}
else{
    console.log("Por favor, seleccione una respuesta válida.")
}

const graficas = ['Nvidia RTX 3070ti', 'Radeon RX 6600 Mech', 'Radeon RX 6650xt', 'Nvidia RTX 3060ti'];
const sillas = ['Silla Aerocool Admiral', 'Silla ASUS ROG', 'Silla Corsair T3 Rush', 'Silla Noganet'];
const procesadores = ['Ryzen 9 5950x', 'Intel I7 10700k', 'Ryzen 7 5800', 'Intel I5 10400k'];
const teclados = ['Razer Huntsman V2', 'Hyperx Alloy Origins', 'Red dragon Kumara K552'];
const gabinetes = ['Gabinete Sentey Z20 Lite', 'Gabinete Aerocool Mecha G-BK'];

const secciones = [graficas, sillas, procesadores, teclados, gabinetes];

console.table(secciones);

// Consulta de cuotas //
for(let cuota=3; cuota<=12; cuota+=3){
    console.log("Los productos pueden pagarse en " + cuota + " cuotas.")
}

let totalCompra = 150000
let cantidadCuotas = parseInt(prompt("Seleccione numero de cuotas para conocer el valor final"))

function calcularPrecioFinal(numeroCuotas){
    this.tresCuotas = 1.17
    this.seisCuotas = 1.30
    this.nueveCuotas = 1.48
    this.doceCuotas = 1.69

    let montoAPagar;
        if(numeroCuotas === 3){
            montoAPagar = 150000*this.tresCuotas
        } else if(numeroCuotas === 6){
            montoAPagar = 150000*this.seisCuotas
        }
        else if(numeroCuotas === 9){
            montoAPagar = 150000*this.nueveCuotas
        }
        else if(numeroCuotas === 12){
            montoAPagar = 150000*this.doceCuotas
        }
        
        return montoAPagar;
    }

const precioFinal = calcularPrecioFinal(cantidadCuotas);
console.log("El precio final a pagar en "+ (cantidadCuotas)+  " cuotas es de: " + (precioFinal));