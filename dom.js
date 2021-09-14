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







for (const producto of allProductos) {
    $("#productos").append(`<li class="box">  Producto: ${producto.nombre}
    <p>  valor: $ : ${producto.precio}</p>
    <b> en stock ${producto.stock}</b></li>`);
}




//console.log(allProductos[i])
//console.log(productosMenoresA1000.nombre)

/* for (const producto of indumentarias) {
    $("#productos-indumentaria").append(`<li>  Producto: ${producto.nombre}
    <p>  valor: $ : ${producto.precio}</p>
    <b> en stock ${producto.stock}</b></li>`);
}

for (const producto of accesorios) {
    $("#productos-accesorios").append(`<li>  Producto: ${producto.nombre}
    <p>  valor: $ : ${producto.precio}</p>
    <b> en stock ${producto.stock}</b></li>`);
} */

let boton = document.getElementById("btn500")
boton.addEventListener("click", respuestaClick)



const productosMenoresA500 = allProductos.filter(function (producto) {
    return producto.precio <= 500
});


function respuestaClick() {
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






//For para iterar dentro del array de arrays, no lo uso al tener un array con todos los objetos. Si lo uso me repite muchas vececes la busqueda
/* 
for (i = 0; i < allProductos.length; i++) {
    allProductos[i]
    
    
} */






   /*  var nuevoContenido = document.createTextNode(`<li class="li">  Producto: ${productosMenoresA1000.nombre}
                                                <p>  valor: $ : ${productosMenoresA1000.precio}</p>
                                                <b> en stock ${productosMenoresA1000.stock}</b></li>`);
    nuevoDiv.appendChild(nuevoContenido); //añade texto al div creado.

    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(nuevoDiv, currentDiv); */