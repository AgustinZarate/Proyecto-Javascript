//Filtro de productos en el DOM


//precio menor a $500
let boton500 = document.getElementById("btn500")
boton500.addEventListener("click", respuestaClick500)


// Con filter se van a mostar los OBJETOS que tengan un precio menor a 500

const productosMenoresA500 = JSON.parse(localStorage.getItem("allProductos")).filter(function (producto) {
    return producto.precio <= 500
});


function respuestaClick500() {
    //usar un condicional para que no se vuelva a repetir el filtro cuando clickea mas veces
    /* if ($(".filtro-500") == false){
        
    } */
    
    for (let producto of productosMenoresA500) {
        $("#contenedorProductos").remove()
        $(".filtro-700").remove()
        $(".filtro-1000").remove()
        $("#productosFiltrados").append(
            `
            <div class="d-flex justify-content-around filtro-500">
            <li class="box menor-500">  Producto: ${producto.nombre}
            <p>  valor: $ : ${producto.precio}</p>
            <b> en stock ${producto.stock}</b>
        
            <button  id="btn${producto.id}"> Agregar al carrito 
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="6" cy="19" r="2" /> <circle cx="17" cy="19" r="2" /> <path d="M17 17h-11v-14h-2" /> <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" /> <path d="M15 6h6m-3 -3v6" /> </svg> 
            </button>
            </li>
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">
            </div>
            
            `);
            $(`#btn${producto.id}`).on(`click`, function () {
                sessionStorage.setItem('carrito', '${producto.nombre}')
                alert(`agregaste al carrito ${producto.nombre}`)
                console.log(`agregaste al carrito ${producto.nombre}`)
            })
            
        }
    $(".menor-500").slideDown(500)
    /* $("#productos").fadeOut(0) */
    
    
}



//--------------------
//precio menor a $700
let boton700 = document.getElementById("btn700")
boton700.addEventListener("click", respuestaClick700)


// Con filter se van a mostar los OBJETOS que tengan un precio menor a 700
const productosMenoresA700 = JSON.parse( localStorage.getItem("allProductos")).filter(function (producto) {
    return producto.precio <= 700
});



function respuestaClick700() {

    for (let producto of productosMenoresA700) {
        $("#contenedorProductos").remove()
        $(".filtro-500").remove()
        $(".filtro-1000").remove()
        $("#productosFiltrados").append(
    `<div class="d-flex justify-content-around filtro-700">
    <li class="box menor-700">
    Producto: ${producto.nombre}
    <p>  valor: $ : ${producto.precio}</p>
    <b> en stock ${producto.stock}</b>
    <button  id="btn${producto.id}"> Agregar al carrito 
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="6" cy="19" r="2" /> <circle cx="17" cy="19" r="2" /> <path d="M17 17h-11v-14h-2" /> <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" /> <path d="M15 6h6m-3 -3v6" /> </svg> 
    </button>
    </li>
    <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">
    </div>
    `);;
    $(`#btn${producto.id}`).on(`click`, function () {
        sessionStorage.setItem('carrito', '${producto.nombre}')
        alert(`agregaste al carrito ${producto.nombre}`)
        console.log(`agregaste al carrito ${producto.nombre}`)
    })
    }
    $(".menor-700").slideDown(500)
}


//--------------------
//precio menor a $1000
let boton1000 = document.getElementById("btn1000")
boton1000.addEventListener("click", respuestaClick1000)


// Con filter se van a mostar los OBJETOS que tengan un precio menor a 1000
const productosMenoresA1000 = JSON.parse( localStorage.getItem("allProductos")).filter(function (producto) {
    return producto.precio <= 1000
});



function respuestaClick1000() {
    
    $("#contenedorProductos").remove()
    $(".filtro-500").remove()
    $(".filtro-700").remove()
    for (let producto of productosMenoresA1000) {
        $("#productosFiltrados").append(
            
    `<div class="d-flex justify-content-around filtro-1000">
    <li class="box menor-1000">
    Producto: ${producto.nombre}
    <p>  valor: $ : ${producto.precio}</p>
    <b> en stock ${producto.stock}</b>
    <button  id="btn${producto.id}"> Agregar al carrito 
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="6" cy="19" r="2" /> <circle cx="17" cy="19" r="2" /> <path d="M17 17h-11v-14h-2" /> <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" /> <path d="M15 6h6m-3 -3v6" /> </svg> 
    </button>
    </li>
    <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">
    </div>
    `);;
        
    }
    $(".menor-1000").slideDown(500)
}

//refrescar la pagina
let botonReinicio = document.getElementById("limpiarFiltro")
botonReinicio.addEventListener("click", respuestaClickReinicio)

function respuestaClickReinicio () {

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
}


//For para iterar dentro del array de arrays, no lo uso al tener un array con todos los objetos. Si lo uso me repite muchas vececes la busqueda
/* 
for (i = 0; i < allProductos.length; i++) {
    allProductos[i]
    
    
} */