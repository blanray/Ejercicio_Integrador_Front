var comprarTicket = document.getElementById("comprar-ticket");
comprarTicket.addEventListener('click', ocultarCuerpo);
comprarTicket.addEventListener('click', cambiarCard);

var comprarTicket2 = document.getElementById("comprar-ticket2");
comprarTicket2.addEventListener('click', ocultarCuerpo);
comprarTicket2.addEventListener('click', cambiarCard);

var miSelector = document.getElementById("mi-selector");
miSelector.addEventListener('change', cambiarCard);
miSelector.addEventListener('change', borrarResumen);

var miResumen = document.getElementById("mi-resumen");
miResumen.addEventListener('click', calcularPrecio);

var miBorrar = document.getElementById("mi-borrar");
miBorrar.addEventListener('click', borrarForm);

function ocultarCuerpo() {

    document.getElementById("cuerpoPrincipal").classList.toggle("ocultarSeccion");
    document.getElementById("formularioCompra").classList.toggle("ocultarSeccion");

}

function cambiarCard() {

    var miSelectorTemp = document.getElementById("mi-selector");
    var opcion = miSelectorTemp.selectedIndex;

    switch (opcion) {
        case 0:

            document.getElementById("miTarjetaEstudiante").classList.add("miBorde");
            document.getElementById("miTarjetaTrainee").classList.remove("miBorde");
            document.getElementById("miTarjetaJunior").classList.remove("miBorde");
            break;
        case 1:
            document.getElementById("miTarjetaEstudiante").classList.remove("miBorde");
            document.getElementById("miTarjetaTrainee").classList.add("miBorde");
            document.getElementById("miTarjetaJunior").classList.remove("miBorde");
            break;
        case 2:
            document.getElementById("miTarjetaEstudiante").classList.remove("miBorde");
            document.getElementById("miTarjetaTrainee").classList.remove("miBorde");
            document.getElementById("miTarjetaJunior").classList.add("miBorde");
            break;
    }

}

function calcularPrecio() {

    var miSelectorTemp2 = document.getElementById("mi-selector");
    var opcion = miSelectorTemp2.selectedIndex;

    var miCantidad = document.getElementById("mi-cantidad");
    var cantidad = miCantidad.value;
    var total = 0;

    switch (opcion) {
        case 0:
            total = (200 * cantidad * 0.20)
            break;
        case 1:
            total = (200 * cantidad * 0.50)
            break;
        case 2:
            total = (200 * cantidad * 0.85)
            break;
    }

    var miResumen = document.getElementById("disabledTextInput");
    miResumen.value = ("Total a pagar $: " + total);

}

function borrarForm() {

    document.getElementById("disabledTextInput").value = ("Total a pagar $: ");
    document.getElementById("mi-cantidad").value = 0;
    document.getElementById("mi-nombre").value = "";
    document.getElementById("mi-apellido").value = "";
    document.getElementById("mi-email").value = "";

}

function borrarResumen() {

    document.getElementById("disabledTextInput").value = ("Total a pagar $: ");

}