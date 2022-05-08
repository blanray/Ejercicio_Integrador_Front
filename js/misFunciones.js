function ocultarCuerpo() {

    document.getElementById("cuerpoPrincipal").classList.toggle("ocultarSeccion");
    document.getElementById("formularioCompra").classList.toggle("ocultarSeccion");

}

document.getElementById("comprarTicket").onclick = function() {

    ocultarCuerpo();
}