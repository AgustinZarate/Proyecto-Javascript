/*------------- Map ---------------------*/
//crea un nuevo array a partir de los datos solicitados

//map precio camiseta
const precioCamiseta = camisetas.map(function (camiseta) {
    return camiseta.precio
});
//map stock camiseta
const stockCamiseta = camisetas.map(function (camiseta) {
    return camiseta.stock
});
const nombreCamiseta = camisetas.map(function (camiseta) {
    return camiseta.nombre
});

//console.log (`Las camisetas en venta son: ${nombreCamisetas} `); 
//ahora llevar precioCamisetas[0/1/3] al while para usar la variable                                                      

// se va a mostrar en consola el nombre de todas las camisetas



// Interaccion con el usuario


const descripcion = "elija el numero del apartado para saber el precio: \n" +
    " 1.Titular \n" +
    " 2.Suplente \n" +
    " 3.Arquero \n" +
    " para salir escriba (esc)";

for (const camiseta of camisetas) {
    //console.log("De: " + camiseta.nombre);
    //console.log("El stock es: " + camiseta.stock);
}

let opcion = prompt(descripcion)

while (opcion != "esc") {
    switch (opcion) {
        case "1":
            // camisetas titular
            let cantidadCompraTitular = (parseInt(prompt(`actualmente contamos con $(stockCamiseta[0]) as camisetas $(nombreCamiseta[0]) valen $(precioCamiseta[0]), ¿cuantas desean comprar?`)));
            if (cantidadCompraTitular <= stockCamiseta[0]) {
                let valorCompra = (precioCamiseta[0] * cantidadCompra);
                alert(`el precio a abonar por $(cantidadCompra) camisetas es de $(valorCompra) `)
                let formaDePago = prompt("desea abonar con 1.efectivo o 2.tarjeta de credito?")
                if (formaDePago == 1) {
                    function dineroSuficiente() {
                        let dineroUsuario = parseInt(prompt(`Ingrese un valor igual o mayor a $ $(valorCompra)`))
                        if (dineroUsuario == valorCompra) {
                            alert("Perfecto, su compra fue efectuada con exito. Muchas Gracias!")
                        } else if (dineroUsuario > valorCompra) {
                            alert(`Perfecto, su compra fue efectuada con exito, su vuelto es de $ (dineroUsuario - valorCompra)`)

                        } else {
                            alert("Dinero insuficiente")
                            dineroSuficiente()
                        }

                    }
                    dineroSuficiente()
                } else if (formaDePago == 2) {
                    /* Funciones para el pedido del usuario, Multiplicar cuando el usuario elija la cantidad de productos
                    y divida cuando el usuario elija la cantidad de cuotas */
                    let pedido = 0

                    function pedidoUsuario(valor, pedido) {
                        pedidoUsuario = valor * pedido
                    }

                    function planDePago(valor, cuotas) {
                        pedido = valor / cuotas
                    }
                    let cantidadCuotas = prompt("El valor de su pedido es de $" + valorCompra + "solo puedes hacerlo en 3 o 6 cuotas s/interes")
                    if (cantidadCuotas == 3) {
                        planDePago(parseInt(valorCompra), cantidadCuotas)
                        alert("el valor de las cuotas es de $" + pedido)
                    } else(cantidadCuotas == 6); {
                        planDePago(parseInt(camisetaTitular.precio * cantidadCompra), cantidadCuotas)
                        alert("el valor de las cuotas es de $" + pedido)
                    }
                }
                stockCamiseta[0].venta(cantidadCompra)
                console.log("El estock de las camisetas titulares pasa a ser de: " + camisetaTitular.stock)
            } else {
                alert("La cantidad de camisetas supera al stock existente")
            }
            break;


        case "2":
            // camisetas suplente
            let cantidadCompraSuplente = (parseInt(prompt(`actualmente contamos con $(stockCamiseta[1]) as camisetas $(nombreCamiseta[1]) valen $(precioCamiseta[1]), ¿cuantas desean comprar?`)));
            if (cantidadCompraSuplente <= stockCamiseta[1]) {
                let valorCompra = (precioCamiseta[1] * cantidadCompra);
                alert(`el precio a abonar por $(cantidadCompra) camisetas es de $(valorCompra) `)
                let formaDePago = prompt("desea abonar con 1.efectivo o 2.tarjeta de credito?")
                if (formaDePago == 1) {
                    function dineroSuficiente() {
                        let dineroUsuario = parseInt(prompt(`Ingrese un valor igual o mayor a $ $(valorCompra)`))
                        if (dineroUsuario == valorCompra) {
                            alert("Perfecto, su compra fue efectuada con exito. Muchas Gracias!")
                        } else if (dineroUsuario > valorCompra) {
                            alert(`Perfecto, su compra fue efectuada con exito, su vuelto es de $ (dineroUsuario - valorCompra)`)

                        } else {
                            alert("Dinero insuficiente")
                            dineroSuficiente()
                        }

                    }
                    dineroSuficiente()
                } else if (formaDePago == 2) {
                    /* Funciones para el pedido del usuario, Multiplicar cuando el usuario elija la cantidad de productos
                    y divida cuando el usuario elija la cantidad de cuotas */
                    let pedido = 0

                    function pedidoUsuario(valor, pedido) {
                        pedidoUsuario = valor * pedido
                    }

                    function planDePago(valor, cuotas) {
                        pedido = valor / cuotas
                    }
                    let cantidadCuotas = prompt("El valor de su pedido es de $" + valorCompra + "solo puedes hacerlo en 3 o 6 cuotas s/interes")
                    if (cantidadCuotas == 3) {
                        planDePago(parseInt(valorCompra), cantidadCuotas)
                        alert("el valor de las cuotas es de $" + pedido)
                    } else(cantidadCuotas == 6); {
                        planDePago(parseInt(camisetaTitular.precio * cantidadCompra), cantidadCuotas)
                        alert("el valor de las cuotas es de $" + pedido)
                    }
                }
                stockCamiseta[1].venta(cantidadCompra)
                console.log("El estock de las camisetas titulares pasa a ser de: " + camisetaTitular.stock)
            } else {
                alert("La cantidad de camisetas supera al stock existente")
            }
            break;

        case "3":
            // camisetas arquero
            let cantidadCompraArquero = (parseInt(prompt(`actualmente contamos con $(stockCamiseta[3]) as camisetas $(nombreCamiseta[3]) valen $(precioCamiseta[3]), ¿cuantas desean comprar?`)));
            if (cantidadCompraArquero <= stockCamiseta[3]) {
                let valorCompra = (precioCamiseta[3] * cantidadCompra);
                alert(`el precio a abonar por $(cantidadCompra) camisetas es de $(valorCompra) `)
                let formaDePago = prompt("desea abonar con 1.efectivo o 2.tarjeta de credito?")
                if (formaDePago == 1) {
                    function dineroSuficiente() {
                        let dineroUsuario = parseInt(prompt(`Ingrese un valor igual o mayor a $ $(valorCompra)`))
                        if (dineroUsuario == valorCompra) {
                            alert("Perfecto, su compra fue efectuada con exito. Muchas Gracias!")
                        } else if (dineroUsuario > valorCompra) {
                            alert(`Perfecto, su compra fue efectuada con exito, su vuelto es de $ (dineroUsuario - valorCompra)`)

                        } else {
                            alert("Dinero insuficiente")
                            dineroSuficiente()
                        }

                    }
                    dineroSuficiente()
                } else if (formaDePago == 2) {
                    /* Funciones para el pedido del usuario, Multiplicar cuando el usuario elija la cantidad de productos
                    y divida cuando el usuario elija la cantidad de cuotas */
                    let pedido = 0

                    function pedidoUsuario(valor, pedido) {
                        pedidoUsuario = valor * pedido
                    }

                    function planDePago(valor, cuotas) {
                        pedido = valor / cuotas
                    }
                    let cantidadCuotas = prompt("El valor de su pedido es de $" + valorCompra + "solo puedes hacerlo en 3 o 6 cuotas s/interes")
                    if (cantidadCuotas == 3) {
                        planDePago(parseInt(valorCompra), cantidadCuotas)
                        alert("el valor de las cuotas es de $" + pedido)
                    } else(cantidadCuotas == 6); {
                        planDePago(parseInt(camisetaTitular.precio * cantidadCompra), cantidadCuotas)
                        alert("el valor de las cuotas es de $" + pedido)
                    }
                }
                stockCamiseta[3].venta(cantidadCompra)
                console.log("El estock de las camisetas titulares pasa a ser de: " + camisetaTitular.stock)
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