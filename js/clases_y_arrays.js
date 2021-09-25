/* Constructor */
/* Objetos */
/* clases */
class Producto {

    constructor(id, nombre, color, stock, precio, tipo, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.stock = stock;
        this.precio = precio;
        this.tipo = tipo;
        this.imagen = imagen;
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

/* Este Array de productos se paso a formato JSON en el archivo: ajax.js
para appendearlos al DOM mediante AJAX */