//Los botones Comprar Ticket muestran la seccion de compra y ocultan el cuerpo principal alternativamente

//Este boton en la nav-bar superior siempre queda visible y al presionarse se vuelve a la pagina principal
var comprarTicket = document.getElementById("comprar-ticket");
comprarTicket.addEventListener('click', ocultarCuerpo);
comprarTicket.addEventListener('click', cambiarCard);
comprarTicket.addEventListener('click', borrarForm);

//no uso query selector por las dudas la compatibilidad, pero los botones hacen lo mismo

var comprarTicket2 = document.getElementById("comprar-ticket2");
comprarTicket2.addEventListener('click', ocultarCuerpo);
comprarTicket2.addEventListener('click', cambiarCard);
comprarTicket2.addEventListener('click', borrarForm);

//Cuando se cambia el selector, se actualiza la card resaltada
var miSelector = document.getElementById("mi-selector");
miSelector.addEventListener('change', cambiarCard);
miSelector.addEventListener('change', borrarResumen);

//Al presionar el boton Resumen, se calcula el total a pagar
var miResumen = document.getElementById("mi-resumen");
miResumen.addEventListener('click', calcularPrecio);

//Limpiar el forumlario al presionar el boton Borrar
var miBorrar = document.getElementById("mi-borrar");
miBorrar.addEventListener('click', borrarForm);

//Funcion para alternar la clase que oculta una seccion, dependiendo si ya esta en la lista de clases del elemento o no
function ocultarCuerpo() {

    document.getElementById("cuerpoPrincipal").classList.toggle("ocultarSeccion");
    document.getElementById("formularioCompra").classList.toggle("ocultarSeccion");

}

//Funcion para resaltar la tarjeta que esta seleccionada en el selector
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

//Funcion que calcula el total a pagar
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

//Funcion para limpiar el formulario completo
function borrarForm() {

    document.getElementById("disabledTextInput").value = ("Total a pagar $: ");
    document.getElementById("mi-cantidad").value = 0;
    document.getElementById("mi-nombre").value = "";
    document.getElementById("mi-apellido").value = "";
    document.getElementById("mi-email").value = "";

}

//Funcion para borrar solo el total a pagar cuando se actualiza el selector en medio de una compra
function borrarResumen() {

    document.getElementById("disabledTextInput").value = ("Total a pagar $: ");

}