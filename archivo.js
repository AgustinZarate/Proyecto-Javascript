let stockCamisetaTitular = 10
let valorCamisetaTitular = 800
let stockCamisetaSuplente = 15
let valorCamisetaSuplente = 700
let pedido = 0


function compraCamisetaTitular(compra) {
    stockCamisetaTitular += compra
}
function ventaCamisetaTitular(venta) {
    stockCamisetaTitular -= venta
}
function compraCamisetaSuplente(compra) {
    stockCamisetaSuplente += compra
}
function ventaCamisetaSuplente(venta) {
    stockCamisetaSuplente -= venta
}

/* function pedidoUsuario (valor, pedido) {
    pedidoUsuario = valor * pedido
} */

function planDePago (valor, cuotas) {
    pedido = valor / cuotas
}



const descripcion = "elija el numero del apartado para saber el precio: \n" 
+ " 1.Titular \n"
+ " 2.Suplente \n"
+ " para salir escriba (esc)";
let opcion = prompt (descripcion)

while (opcion != "esc") {
switch (opcion) {
    case "1":
        /* camisetas titular */
        let compraUsuarioTitular = (parseInt(prompt ("las camisetas titulares valen $800, ¿cuantas desean comprar?")));
			if (compraUsuarioTitular <= stockCamisetaTitular ) {
				alert ("el precio a abonar por " + compraUsuarioTitular + " camisetas es de " + (valorCamisetaTitular * compraUsuarioTitular))
                let formaDePago = prompt ("desea abonar con 1.efectivo o 2.tarjeta de credito?")
                if (formaDePago == 1){
                    let dineroUsuario = parseInt(prompt("Ingrese un valor iguil o mayo a $" + (valorCamisetaTitular * compraUsuarioTitular)))
                    if (dineroUsuario == (valorCamisetaTitular * compraUsuarioTitular)){
                        alert ("Perfecto, su compra fue efectuada con exito. Muchas Gracias!")
                    } else if (dineroUsuario > (valorCamisetaTitular * compraUsuarioTitular)) {
                        alert ("Perfecto, su compra fue efectuada con exito, su vuelto es de $" + (dineroUsuario - (valorCamisetaTitular * compraUsuarioTitular)))
                    } else if (dineroUsuario < (valorCamisetaTitular * compraUsuarioTitular)){
                        alert ("el monto ingresado es menor al valor de la compra")
                    }
                    
                }else if (formaDePago == 2) {
                    let cantidadCuotas = prompt("El valor de su pedido es de $" + (valorCamisetaTitular * compraUsuarioTitular) + "puedes hacerlo en 3 o 6 cuotas")
                    if (cantidadCuotas == 3) {
                        planDePago(parseInt(valorCamisetaTitular * compraUsuarioTitular), cantidadCuotas)
                        alert ("el valor de las cuotas es de $" + pedido)
                    } else (cantidadCuotas == 6);{
                        planDePago(parseInt(valorCamisetaTitular * compraUsuarioTitular), cantidadCuotas)
                        alert ("el valor de las cuotas es de $" + pedido)
                    }
                
                }
					ventaCamisetaTitular (compraUsuarioTitular)
					console.log (stockCamisetaTitular)
		} 
        else {
            alert ("La cantidad de camisetas supera al stock existente")
        }
        break;
				
    case "2":
        /* Camisetas Suplentes */
        let compraUsuarioSuplente = (parseInt(prompt ("las camisetas titulares valen $700, ¿cuantas desean comprar?")));
			if (compraUsuarioSuplente <= stockCamisetaSuplente ) {
				alert ("el precio a abonar por " + compraUsuarioSuplente + " camisetas es de " + (valorCamisetaSuplente * compraUsuarioSuplente))
                let formaDePago = prompt ("desea abonar con 1.efectivo o 2.tarjeta de credito?")
                /* pago en efectivo */
                if (formaDePago == 1){
                    let dineroUsuario = parseInt(prompt("Ingrese un valor iguil o mayo a $" + (valorCamisetaSuplente * compraUsuarioSuplente)))
                    if (dineroUsuario == (valorCamisetaSuplente * compraUsuarioSuplente)){
                        alert ("Perfecto, su compra fue efectuada con exito. Muchas Gracias!")
                    } else if (dineroUsuario > (valorCamisetaSuplente * compraUsuarioSuplente)) {
                        alert ("Perfecto, su compra fue efectuada con exito, su vuelto es de $" + (dineroUsuario - (valorCamisetaSuplente * compraUsuarioSuplente)))
                    } else if (dineroUsuario < (valorCamisetaSuplente * compraUsuarioSuplente)){
                        alert ("el monto ingresado es menor al valor de la compra")
                    }
                    /* Pago en cuotas */
                }else if (formaDePago == 2) {
                    let cantidadCuotas = prompt("El valor de su pedido es de $" + (valorCamisetaSuplente * compraUsuarioSuplente) + "puedes hacerlo en 3 o 6 cuotas sin interes")
                    if (cantidadCuotas == 3) {
                        planDePago(parseInt(valorCamisetaSuplente * compraUsuarioSuplente), cantidadCuotas)
                        alert ("el valor de las cuotas es de $" +(pedido))
                    } else (cantidadCuotas == 6);{
                        planDePago(parseInt(valorCamisetaSuplente * compraUsuarioSuplente), cantidadCuotas)
                        alert ("el valor de las cuotas es de $" + pedido)
                    }
                
                }
					ventaCamisetaTitular (compraUsuarioSuplente)
					console.log (stockCamisetaSuplente)
		} 
        else {
            alert ("La cantidad de camisetas supera al stock existente")
        }
        break;
				
    default:
        alert ("Por favor elija una opcion correcta al colocar 1 (camiseta titular) o 2 (camiseta suplente)")
        break;
}
opcion = prompt (descripcion)
}  