

//ingresar productos en el DOM

//Append de todos los productos
//se piden los productos desde el JSON de localStorage para poder usar los objetos
//este algoritmo ya no se utiliza por la implementacion de AJAX
for (const producto of JSON.parse( localStorage.getItem("allProductos"))) {
    
    $("#contenedorProductos").append(
    `<div class="d-flex justify-content-around productos">
    <li class="box">  Producto: ${producto.nombre}
    <p>  valor: $ : ${producto.precio}</p>
    <b> en stock ${producto.stock}</b>

    <button  id="btn${producto.id}"> Agregar al carrito 
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="6" cy="19" r="2" /> <circle cx="17" cy="19" r="2" /> <path d="M17 17h-11v-14h-2" /> <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" /> <path d="M15 6h6m-3 -3v6" /> </svg> 
    </button>
    </li>
    <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">
    </div>`);
    $(`#btn${producto.id}`).on(`click`, function () {
        sessionStorage.setItem('carrito', '${producto.nombre}')
        alert(`agregaste al carrito ${producto.nombre}`)
        console.log(`agregaste al carrito ${producto.nombre}`)
    })
}


//Se usa datos del SessionStorage para appendear un saludo
//ejemplo de append sin JQuery
//usuario
let usuario = document.getElementById("usuario");
let liUsuario = document.createElement("li");
liUsuario.innerHTML = `<h3>Hola, <b>${sessionStorage.getItem("nombreUsuario")}</b> bienvenido</h3>`;
    usuario.appendChild(liUsuario);
