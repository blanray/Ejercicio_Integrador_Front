var comprarTicket = document.getElementById("comprar-ticket")
comprarTicket.addEventListener('click', ocultarCuerpo)

var comprarTicket2 = document.getElementById("comprar-ticket2")
comprarTicket2.addEventListener('click', ocultarCuerpo)

function ocultarCuerpo() {

    document.getElementById("cuerpoPrincipal").classList.toggle("ocultarSeccion");
    document.getElementById("formularioCompra").classList.toggle("ocultarSeccion");

}