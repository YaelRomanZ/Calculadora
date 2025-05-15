let pantalla = document.getElementById('pantalla');
let resultadoPantalla = document.getElementById('resultado');

function insertar(numero) {
    pantalla.value += numero;
}

function operar(operador) {
    pantalla.value += operador;
}

function calcular() {
    try {
        resultadoPantalla.value = eval(pantalla.value);
        resultadoPantalla.classList.add('mostrar'); //AYMT. Esta linea agrega la clase requerida para la animación del segundo input
    } catch (error) {
        resultadoPantalla.value = "Error";
        resultadoPantalla.classList.add('mostrar'); //AYMT. Esta linea agrega una animacion cuando se muestre el texto "Error"
    }
    pantalla.value = ""; //AYMT. Limpia el primer input despues de realizar el calculo
}

function borrar() {
    pantalla.value = "";
    resultadoPantalla.value = "";
    resultadoPantalla.classList.remove('mostrar'); //AYMT. Oculta el resultado del calculo.
}