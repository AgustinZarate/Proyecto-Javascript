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






//ingresar productos en el DOM
for (const producto of allProductos) {
    $("#productos").append(`<li class="box">  Producto: ${producto.nombre}
    <p>  valor: $ : ${producto.precio}</p>
    <b> en stock ${producto.stock}</b></li>`);
}


//Filtro de productos en el DOM


//precio menor a $500
let boton500 = document.getElementById("btn500")
boton500.addEventListener("click", respuestaClick500)



const productosMenoresA500 = allProductos.filter(function (producto) {
    return producto.precio <= 500
});


function respuestaClick500() {
    // crea un nuevo div
    // y añade contenido
    var nuevoDiv = document.createElement("div");
    for (let producto of productosMenoresA500) {
    
        $("#productosFiltrados").append(
    `<li class="box">
    Producto: ${producto.nombre}
    <p>  valor: $ : ${producto.precio}</p>
    <b> en stock ${producto.stock}</b></li>`);;
        
    }

}

//--------------------
//precio menor a $700
let boton700 = document.getElementById("btn700")
boton700.addEventListener("click", respuestaClick700)



const productosMenoresA700 = allProductos.filter(function (producto) {
    return producto.precio <= 700
});


function respuestaClick700() {
    // crea un nuevo div
    // y añade contenido
    var nuevoDiv = document.createElement("div");
    for (let producto of productosMenoresA700) {
    
        $("#productosFiltrados").append(
    `<li class="box">
    Producto: ${producto.nombre}
    <p>  valor: $ : ${producto.precio}</p>
    <b> en stock ${producto.stock}</b></li>`);;
        
    }

}


//--------------------
//precio menor a $1000
let boton1000 = document.getElementById("btn1000")
boton1000.addEventListener("click", respuestaClick1000)



const productosMenoresA1000 = allProductos.filter(function (producto) {
    return producto.precio <= 1000
});


function respuestaClick1000() {
    // crea un nuevo div
    // y añade contenido
    var nuevoDiv = document.createElement("div");
    for (let producto of productosMenoresA1000) {
    
        $("#productosFiltrados").append(
    `<li class="box">
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
