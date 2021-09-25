//Declaramos la url del archivo JSON local
const URLJSON =  "data/datos.json"
//solicitamos los datos del archivo .json y los appendeamos al DOM
$.getJSON( URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let productos = respuesta;
      for (const producto of productos) {
        $("#contenedorProductos").append(`<div class="d-flex justify-content-around productos">
        <li class="box">  Producto: ${producto.nombre}
        <p>  valor: $ : ${producto.precio}</p>
        <b> en stock ${producto.stock}</b>
    
        <button  id="btn${producto.id}"> Agregar al carrito 
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="6" cy="19" r="2" /> <circle cx="17" cy="19" r="2" /> <path d="M17 17h-11v-14h-2" /> <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" /> <path d="M15 6h6m-3 -3v6" /> </svg> 
        </button>
        </li>
        <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">
        </div>`)
        $(`#btn${producto.id}`).on(`click`, function () {
          sessionStorage.setItem('carrito', '${producto.nombre}')
          alert(`agregaste al carrito ${producto.nombre}`)
          console.log(`agregaste al carrito ${producto.nombre}`)
      })
      }  
    }
    });