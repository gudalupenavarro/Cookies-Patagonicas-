export function procesarPedido() {
    carrito.forEach((prod) => {
        const contenedorCompra = document.querySelector('#contenedorCompra')
        const { id, nombre, precio, desc, img, cantidad } = prod;
        const div = document.createElement("div");
        div.innerHTML += `