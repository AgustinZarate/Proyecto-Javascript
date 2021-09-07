/* Constructor */
/* Objetos */

/* clases */
class Producto {
    constructor(nombre, color, stock, precio) {
        this.nombre = nombre;
        this.color = color;
        this.stock = stock;
        this.precio = precio;
    }
    venta (venta) {
        this.stock -= venta;
    };
    compra(compra) {
        this.stock += compra;
    };
}

/* Arrays */
/* Productos */


/* Camisetas */
const camisetas = [];
camisetas.push(new Producto("titular", "azul y rojo", 10, 800))
camisetas.push(new Producto("suplente", "blanco", 15, 700))
camisetas.push(new Producto("arquero", "negra", 5, 500))
const indumentarias = []
indumentarias.push(new Producto("bolso", "negro", 3, 500))
indumentarias.push(new Producto("short", "azul", 5, 400))
indumentarias.push(new Producto("remera entrenamiento", "azul", 3, 500))
indumentarias.push(new Producto("medias", "blanco", 7, 600))
const accesorios = []
accesorios.push(new Producto("barbijo", "azul y rojo", 10, 150))
accesorios.push(new Producto("reloj", "negro", 2, 1500))


/* Funciones para el pedido del usuario, Multiplicar cuando el usuario elija la cantidad de productos
y divida cuando el usuario elija la cantidad de cuotas */
/* let pedido = 0
function pedidoUsuario(valor, pedido) { 
    pedidoUsuario = valor * pedido
}
function planDePago(valor, cuotas) {
    pedido = valor / cuotas
} */


for (const camiseta of camisetas) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Camiseta  ${camiseta.nombre}</h3>
                            <p>  valor: $ : ${camiseta.precio}</p>
                            <b> en stock ${camiseta.stock}</b>`;
    document.body.appendChild(contenedor);
}

class Usuario {
    constructor(nombre, edad, billetera) {
        this.nombre = nombre;
        this.edad = edad;
        this.billetera = billetera;
    }
}


//DOM
/* const usuarios = [];
usuarios.push(new Usuario(prompt("por favor ingrese un nombre"), 23, 100))

const bienvenida = document.createElement("h2")
bienvenida.innerHTML = `Bienvenido ${usuarios.nombre} a esta tienda virtual`;
document.body.appendChild(bienvenida); */










// Interaccion con el usuario


const descripcion = "elija el numero del apartado para saber el precio: \n" +
    " 1.Titular \n" + 
    " 2.Suplente \n" +
    " para salir escriba (esc)";

    for (const camiseta of camisetas) {
        console.log("De: " + camiseta.nombre);
        console.log("El stock es: " + camiseta.stock);
    }

let opcion = prompt(descripcion)

while (opcion != "esc") { 0
    switch (opcion) {
        case "1":
            // camisetas titular
            let cantidadCompra = (parseInt(prompt("las camisetas titulares valen $800, ¿cuantas desean comprar?")));
            if (cantidadCompra <= camisetaTitular.stock) {
                alert("el precio a abonar por " + cantidadCompra + " camisetas es de " + (camisetaTitular.precio * cantidadCompra))
                let formaDePago = prompt("desea abonar con 1.efectivo o 2.tarjeta de credito?")
                if (formaDePago == 1) {
                    let dineroUsuario = parseInt(prompt("Ingrese un valor iguil o mayo a $" + (camisetaTitular.precio * cantidadCompra)))
                    if (dineroUsuario == (camisetaTitular.precio * cantidadCompra)) {
                        alert("Perfecto, su compra fue efectuada con exito. Muchas Gracias!")
                    } else if (dineroUsuario > (camisetaTitular.precio * cantidadCompra)) {
                        alert("Perfecto, su compra fue efectuada con exito, su vuelto es de $" + (dineroUsuario - (camisetaTitular.precio * cantidadCompra)))
                    } else if (dineroUsuario < (camisetaTitular.precio * cantidadCompra)) {
                        alert("el monto ingresado es menor al valor de la compra")
                    }
                } else if (formaDePago == 2) {
                    let cantidadCuotas = prompt("El valor de su pedido es de $" + (camisetaTitular.precio * cantidadCompra) + "puedes hacerlo en 3 o 6 cuotas")
                    if (cantidadCuotas == 3) {
                        planDePago(parseInt(camisetaTitular.precio * cantidadCompra), cantidadCuotas)
                        alert("el valor de las cuotas es de $" + pedido)
                    } else(cantidadCuotas == 6); {
                        planDePago(parseInt(camisetaTitular.precio * cantidadCompra), cantidadCuotas)
                        alert("el valor de las cuotas es de $" + pedido)
                    }

                }
                camisetaTitular.venta(cantidadCompra)
                console.log("El estock de las camisetas titulares pasa a ser de: " + camisetaTitular.stock)
            } else {
                alert("La cantidad de camisetas supera al stock existente")
            }
            break;

        case "2":
            // Camisetas Suplentes
            let cantidadCompra1 = (parseInt(prompt("las camisetas titulares valen $800, ¿cuantas desean comprar?")));
            if (cantidadCompra1 <= camisetaSuplente.stock) {
                alert("el precio a abonar por " + cantidadCompra1 + " camisetas es de " + (CamisetaSuplente.stock * cantidadCompra1))
                let formaDePago = prompt("desea abonar con 1.efectivo o 2.tarjeta de credito?")
                // pago en efectivo
                if (formaDePago == 1) {
                    let dineroUsuario = parseInt(prompt("Ingrese un valor iguil o mayo a $" + (CamisetaSuplente.stock * cantidadCompra1)))
                    if (dineroUsuario == (CamisetaSuplente.stock * cantidadCompra1)) {
                        alert("Perfecto, su compra fue efectuada con exito. Muchas Gracias!")
                    } else if (dineroUsuario > (CamisetaSuplente.stock * cantidadCompra1)) {
                        alert("Perfecto, su compra fue efectuada con exito, su vuelto es de $" + (dineroUsuario - (CamisetaSuplente.stock * cantidadCompra1)))
                    } else if (dineroUsuario < (CamisetaSuplente.stock * cantidadCompra1)) {
                        alert("el monto ingresado es menor al valor de la compra")
                    }
                    // Pago en cuotas
                } else if (formaDePago == 2) {
                    let cantidadCuotas = prompt("El valor de su pedido es de $" + (CamisetaSuplente.stock * cantidadCompra1) + "puedes hacerlo en 3 o 6 cuotas sin interes")
                    if (cantidadCuotas == 3) {
                        planDePago(parseInt(CamisetaSuplente.stock * cantidadCompra1), cantidadCuotas)
                        alert("el valor de las cuotas es de $" + (pedido))
                    } else(cantidadCuotas == 6); {
                        planDePago(parseInt(CamisetaSuplente.stock * cantidadCompra1), cantidadCuotas)
                        alert("el valor de las cuotas es de $" + pedido)
                    }

                }
                camisetaSuplente.venta(cantidadCompra1)
                console.log("El estock de las camisetas suplentes pasa a ser de: " +camisetaSuplente.stock)
            } else {
                alert("La cantidad de camisetas supera al stock existente")
            }
            break;

        default:
            alert("Por favor elija una opcion correcta al colocar 1 (camiseta titular) o 2 (camiseta suplente)")
            break;
    }
    opcion = prompt(descripcion)
}


 