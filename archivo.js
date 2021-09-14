/* Constructor */
/* Objetos */
/* clases */
class Producto {

    constructor(nombre, color, stock, precio, tipo) {
        this.nombre = nombre;
        this.color = color;
        this.stock = stock;
        this.precio = precio;
        this.tipo = tipo;
    }
    venta(venta) {
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
camisetas.push(new Producto("Camiseta titular", "azul y rojo", 10, 800, "camiseta"))
camisetas.push(new Producto("Camista suplente", "blanco", 15, 700, "camiseta"))
camisetas.push(new Producto("Camiseta arquero", "negra", 5, 500, "camiseta"))
/* indumentaria */
const indumentarias = [];
indumentarias.push(new Producto("bolso", "negro", 3, 500, "indumentaria"))
indumentarias.push(new Producto("short", "azul", 5, 400, "indumentaria"))
indumentarias.push(new Producto("remera entrenamiento", "azul", 3, 500, "indumentaria"))
indumentarias.push(new Producto("medias", "blanco", 7, 600, "indumentaria"))
/* accesorios */
const accesorios = [];
accesorios.push(new Producto("barbijo", "azul y rojo", 10, 150, "accesorio"))
accesorios.push(new Producto("reloj", "negro", 2, 1500, "accesorio"))
/* todos los productos */
const todosLosProductos = [];
todosLosProductos.push(camisetas, indumentarias, accesorios);







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













//Append de todos los productos

//----------------------------------------------------------------


/*------------------ Filter --------------*/
/* const camisetaMenorA700 = camisetas.filter(function (camiseta) {
    return camiseta.precio <= 700 }); */ // <---- en caso de tambien usar .map deberiamos de borrar los ;                                                
//console.log(camisetaMenorA700);


// Con filter se van a mostar los OBJETOS que tengan un precio menor a 700
// se puede agregar un .map para ser mas especifico dentro de esos objetos ya filtrados

/* .map (function(camiseta) {                                      
        return  camiseta.precio });
    console.log (precioMenorA500); */
//    const camisetaMenorA500 = camisetas.filter  (function(camiseta) {                                      
//        return  camiseta.precio <= 500});                                             
//        console.log (camisetaMenorA500);




//.filter productos menores a $700




//append filtro arrays -1000
for (i = 0; i < todosLosProductos.length; i++) {
    todosLosProductos[i]
    const productosMenoresA1000 = todosLosProductos[i].filter(function (producto) {
        return producto.precio <= 1000
    });
    //console.log(productosMenoresA1000);
    let boton = document.getElementById("btn1000")
    boton.addEventListener("click", respuestaClick)

    function respuestaClick() {
        // crea un nuevo div
        // y añade contenido
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode(productosMenoresA1000);
        newDiv.appendChild(newContent); //añade texto al div creado.

        // añade el elemento creado y su contenido al DOM
        var currentDiv = document.getElementById("div1");
        document.body.insertBefore(newDiv, currentDiv);
    }
}


//append filtro arrays -700
for (i = 0; i < todosLosProductos.length; i++) {
    todosLosProductos[i]
    //console.log(todosLosProductos[i])
    const productosMenoresA700 = todosLosProductos[i].filter(function (producto) {
        return producto.precio <= 700
    }); // <---- en caso de tambien usar .map deberiamos de borrar los ;                                                
    //console.log(productosMenoresA700);
    let boton = document.getElementById("btn700")
    boton.addEventListener("click", respuestaClick)

    function respuestaClick() {
        // crea un nuevo div
        // y añade contenido
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode(productosMenoresA700);
        newDiv.appendChild(newContent); //añade texto al div creado.

        // añade el elemento creado y su contenido al DOM
        var currentDiv = document.getElementById("div1");
        document.body.insertBefore(newDiv, currentDiv);
        alert(productosMenoresA700)
    }
}


//append filtro arrays -500
for (i = 0; i < todosLosProductos.length; i++) {
    todosLosProductos[i]
    const productosMenoresA500 = todosLosProductos[i].filter(function (producto) {
        return producto.precio <= 500
    });
    //console.log(productosMenoresA500);

    //console.log(productosMenoresA1000);
    let boton = document.getElementById("btn500")
    boton.addEventListener("click", respuestaClick)

    function respuestaClick() {
        // crea un nuevo div
        // y añade contenido
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode(productosMenoresA500);
        newDiv.appendChild(newContent); //añade texto al div creado.

        // añade el elemento creado y su contenido al DOM
        var currentDiv = document.getElementById("div1");
        document.body.insertBefore(newDiv, currentDiv);
        alert(productosMenoresA500)
    }
}










//se cambio
/* for (i = 0; i < todosLosProductos.length; i++) {
    
	todosLosProductos[i]
for (const producto of todosLosProductos) {
	let contenedorPadre = document.getElementById(productos)
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Producto:  ${todosLosProductos[i].nombre}</h3>
                            <p>  valor: $ : ${todosLosProductos[i].precio}</p>
                            <b> en stock ${todosLosProductos[i].stock}</b>`;
                            document.body.appendChild(contenedor);
}
} */

/* 
for (i = 0; i < todosLosProductos.length; i++) {
    todosLosProductos[i]
    for (i = 0; i < todosLosProductos.length; i++){
        for (const producto of todosLosProductos) {
            $("#productos").append(`<div><h3>  Producto: ${producto.nombre}</h3>
            <p>  valor: $ : ${producto.precio}</p>
            <b> en stock ${producto.precio}</b></div>`);
        }
    }
    
} */