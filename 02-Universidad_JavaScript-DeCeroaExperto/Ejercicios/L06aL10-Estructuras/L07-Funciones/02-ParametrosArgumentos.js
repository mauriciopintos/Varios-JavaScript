// Parametros: Son la o las variables que tiene una funcion para recibir valores
// Argumentos: Valores que pasamos en los paramentros

let sumar = function (a=0, b=0) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b;
};

let resultado = sumar(2, 3, 'r');
console.log(resultado);
resultado = sumar();
console.log(resultado);
