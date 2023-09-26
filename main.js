//Bienvenida de usuario//
let nombre = prompt("Ingrese su nombre de pila")

if (nombre == "") {
    alert("No se ingresó ningun nombre");
}
else{
    console.log("¡Bienvenido/a " + nombre + ", disfrute de nuestro sitio!")
}

//Catalogo//

let respuesta = String(prompt("¿Desea ver nuestras categorias de productos? Seleccione Si / No"))

let respuestaUsuario = respuesta;

if(respuesta.toLowerCase() === "si") {
    console.log("Productos")
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