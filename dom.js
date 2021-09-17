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


const allProductos = []
//camisetas
allProductos.push(new Producto("Camiseta titular", "azul y rojo", 10, 800, "camiseta"))
allProductos.push(new Producto("Camista suplente", "blanco", 15, 700, "camiseta"))
allProductos.push(new Producto("Camiseta arquero", "negra", 5, 500, "camiseta"))
/* indumentaria */
allProductos.push(new Producto("bolso", "negro", 3, 500, "indumentaria"))
allProductos.push(new Producto("short", "azul", 5, 400, "indumentaria"))
allProductos.push(new Producto("remera entrenamiento", "azul", 3, 500, "indumentaria"))
allProductos.push(new Producto("medias", "blanco", 7, 600, "indumentaria"))
/* accesorios */
allProductos.push(new Producto("barbijo", "azul y rojo", 10, 150, "accesorio"))
allProductos.push(new Producto("reloj", "negro", 2, 1500, "accesorio"))


//Ingresar datos en el storage
//session
sessionStorage.setItem('nombreUsuario', prompt("por favor ingrese su nombre"));
console.log("Nombre del Usuario: ", sessionStorage.getItem('nombreUsuario') )
sessionStorage.setItem('edadUsuario', prompt("por favor ingrese su edad"));
console.log("Edad del Usuario: ", sessionStorage.getItem('edadUsuario') )


//local
const allProductosJSON = JSON.stringify(allProductos)
localStorage.setItem("allProductos", allProductosJSON);
//console.log("Productos: ", JSON.parse( localStorage.getItem("allProductos")) )

/* 
1)transformamos el objeto "allProductos" en JSON, con stringify (transforma el objeto en string)
2)guardarlo en el localStorage
3)usar JSON.parse para transformarlo de vuelta a objeto y usarlo correctamente
*/

//ingresar productos en el DOM

//usuario
let usuario = document.getElementById("usuario");
let liUsuario = document.createElement("li");
liUsuario.innerHTML = `<h3>Hola, <b>${sessionStorage.getItem("nombreUsuario")}</b> bienvenido</h3>`;
    usuario.appendChild(liUsuario);

//ingresar productos en el DOM
for (const producto of JSON.parse( localStorage.getItem("allProductos"))) {
    $("#productos").append(`<li class="box">  Producto: ${producto.nombre}
    <p>  valor: $ : ${producto.precio}</p>
    <b> en stock ${producto.stock}</b></li>`);
}


//Filtro de productos en el DOM


//precio menor a $500
let boton500 = document.getElementById("btn500")
boton500.addEventListener("click", respuestaClick500)



const productosMenoresA500 = JSON.parse(localStorage.getItem("allProductos")).filter(function (producto) {
    return producto.precio <= 500
});


function respuestaClick500() {
    // crea un nuevo div
    // y añade contenido
    var nuevoDiv = document.createElement("div");
    for (let producto of productosMenoresA500) {
    
        $("#productosFiltrados").append(
    `<li class="box menor-500">
    Producto: ${producto.nombre}
    <p>  valor: $ : ${producto.precio}</p>
    <b> en stock ${producto.stock}</b></li>`);;
        
    }

}


//--------------------
//precio menor a $700
let boton700 = document.getElementById("btn700")
boton700.addEventListener("click", respuestaClick700)



const productosMenoresA700 = JSON.parse( localStorage.getItem("allProductos")).filter(function (producto) {
    return producto.precio <= 700
});



function respuestaClick700() {
    // crea un nuevo div
    // y añade contenido
    var nuevoDiv = document.createElement("div");
    for (let producto of productosMenoresA700) {
    
        $("#productosFiltrados").append(
    `<li class="box menor-700">
    Producto: ${producto.nombre}
    <p>  valor: $ : ${producto.precio}</p>
    <b> en stock ${producto.stock}</b></li>`);;
        
    }

}


//--------------------
//precio menor a $1000
let boton1000 = document.getElementById("btn1000")
boton1000.addEventListener("click", respuestaClick1000)



const productosMenoresA1000 = JSON.parse( localStorage.getItem("allProductos")).filter(function (producto) {
    return producto.precio <= 1000
});



function respuestaClick1000() {
    // crea un nuevo div
    // y añade contenido
    var nuevoDiv = document.createElement("div");
    for (let producto of productosMenoresA1000) {
    
        $("#productosFiltrados").append(
    `<li class="box menor-1000">
    Producto: ${producto.nombre}
    <p>  valor: $ : ${producto.precio}</p>
    <b> en stock ${producto.stock}</b></li>`);;
        
    }

}




//For para iterar dentro del array de arrays, no lo uso al tener un array con todos los objetos. Si lo uso me repite muchas vececes la busqueda
/* 
for (i = 0; i < allProductos.length; i++) {
    allProductos[i]
    
    
} */
