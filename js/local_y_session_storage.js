const allProductos = []
//camisetas
allProductos.push(new Producto(1, "Camiseta titular", "azul y rojo", 10, 800, "camiseta", "/img/camiseta_titular.webp"))
allProductos.push(new Producto(2, "Camista suplente", "blanco", 15, 700, "camiseta", "/img/camiseta_suplente.png"))
allProductos.push(new Producto(3, "Camiseta arquero", "negra", 5, 500, "camiseta", "/img/camiseta_arquero.jpg"))
/* indumentaria */
allProductos.push(new Producto(4, "bolso", "negro", 3, 500, "indumentaria", "/img/bolso.png"))
allProductos.push(new Producto(5, "short", "azul", 5, 400, "indumentaria","/img/short.jpg"))
allProductos.push(new Producto(6, "remera entrenamiento", "azul", 3, 500, "indumentaria","/img/remera_entrenamiento.webp"))
allProductos.push(new Producto(7, "canilleras", "azul y rojo", 7, 600, "indumentaria","/img/canilleras.jpg"))
/* accesorios */
allProductos.push(new Producto(8, "barbijo", "azul y rojo", 10, 150, "accesorio", "/img/barbijo.jpg"))
allProductos.push(new Producto(9, "reloj", "negro", 2, 1500, "accesorio","/img/reloj.jpg"))


//Ingresar datos en el storage


//session
/* sessionStorage.setItem('nombreUsuario', prompt("por favor ingrese su nombre"));
console.log("Nombre del Usuario: ", sessionStorage.getItem('nombreUsuario') )
sessionStorage.setItem('edadUsuario', prompt("por favor ingrese su edad"));
console.log("Edad del Usuario: ", sessionStorage.getItem('edadUsuario') ) */


//local
const allProductosJSON = JSON.stringify(allProductos)
localStorage.setItem("allProductos", allProductosJSON);
//console.log("Productos: ", JSON.parse( localStorage.getItem("allProductos")) )

/* 
1)transformamos el objeto "allProductos" en JSON, con stringify (transforma el objeto en string)
2)guardarlo en el localStorage
3)usar JSON.parse para transformarlo de vuelta a objeto y usarlo correctamente
-Como se hace en dom.js
*/