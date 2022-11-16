const stockProductos = [
 
    {
        id: 1,
        nombre: "Lupino",
        cantidad: 1,
        desc: "Cookie con chispas de chocolate",
        precio: 50,
        img: "IMAGENES/cookieSim2.jpg",
      },
      {
        id: 2,
        nombre: "Amancay",
        cantidad: 1,
        desc: "Cookie deliciosa con semillas integrales",
        precio: 50,
        img: "IMAGENES/cookiesSim3.jpg",
      },
      {
        id: 3,
        nombre: "Canelo",
        cantidad: 1,
        desc: "Cookie de canela, nuez y bañado de chocolate blanco",
        precio: 50,
        img: "IMAGENES/cookienuez.png",
      },
      {
        id: 4,
        nombre: "Lenga",
        cantidad: 1,
        desc: "Cookie especial navideña",
        precio: 50,
        img: "IMAGENES/cookienavideña.png",
      },
      {
        id: 5,
        nombre: "Calandrinia",
        cantidad: 1,
        desc: "Cookie bañada de chocolate blanco y chispas de chocolate",
        precio: 50,
        img: "IMAGENES/cookieblanco.png",
      },
      {
        id: 6,
        nombre: "Chilko",
        cantidad: 1,
        desc: "Cookie  de frutilla con chipas de chocolate",
        precio: 50,
        img: "IMAGENES/cookiefrutillaychoco.png",
      },
      {
        id: 7,
        nombre: "Lavanda",
        cantidad: 1,
        desc: "Super Cookie de chocolate rellena de crema con pedacitos de oreo",
        precio: 50,
        img: "IMAGENES/cookierellena.png",
      },
      {
        id: 8,
        nombre: "Silvestre",
        cantidad: 1,
        desc: "cookie con rosa mosqueta",
        precio: 50,
        img: "IMAGENES/cookieRosaMosqueta.png",
      },
      {
        id: 9,
        nombre: "Mutisia",
        cantidad: 1,
        desc: "Mega Cookie Chocolotosa",
        precio: 50,
        img: "IMAGENES/cookieChocoNegro.png",
      },
      {
        id: 10,
        nombre: "Tulipanes",
        cantidad: 1,
        desc: "Cookie de frutos rojos",
        precio: 50,
        img: "IMAGENES/cookiefrutos.png",
      },
  ]    
  let carrito = [];
  
  const contenedor = document.querySelector("#contenedor");
  const carritoContenedor = document.querySelector("#carritoContenedor");
  const vaciarCarrito = document.querySelector("#vaciarCarrito");
  const precioTotal = document.querySelector("#precioTotal");
  const activarFuncion = document.querySelector("#activarFuncion");
  const procesarCompra = document.querySelector("#procesarCompra");
  const totalProceso = document.querySelector("#totalProceso");
  const formulario = document.querySelector('#procesar-pago')
  
  if (activarFuncion) {
    activarFuncion.addEventListener("click", procesarPedido);
  }
  document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    mostrarCarrito();
    document.querySelector("#activarFuncion").click(procesarPedido);
  });

  if(formulario){
    formulario.addEventListener('submit', enviarCompra)
  }
  
  
  if (vaciarCarrito) {
    vaciarCarrito.addEventListener("click", () => {
      carrito.length = [];
      mostrarCarrito();
    });
  }
  
  if (procesarCompra) {
    procesarCompra.addEventListener("click", () => {
      if (carrito.length === 0) {
        Swal.fire({
          title: "¡Tu carrito está vacio!",
          text: "Compra algo para continuar con la compra",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      } else {
        location.href = "compra.html";
      }
    });
  }