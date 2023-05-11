// Hoisting: Llamar a la funcion antes de su declaracion
sumaDosNumeros(5,7)

// Declaracion de una funcion
function sumaDosNumeros(a, b){
    console.log('Suma: ' + ( a + b));
}

// Llamada a la funcion
sumaDosNumeros(2, 3);

// Funcion con retorno
function sumaConRetorno(a, b){
    return a + b;
}
let resultado = sumaConRetorno(3, 9);
console.log(resultado);

// Funcion de tipo expresion
let sumar = function ( a, b){return a + b};
resultado = sumar(1, 2);
console.log(resultado);

// Funcion de tipo Self-Invoking
(function(){
    console.log('Ejecuntando funcion anonima')
})();

// Funciones como objetos: Tienen propiedadees y metodos
function unaFuncion(a,b,c){
    // Propiedades
    console.log(arguments.length);
    console.log(arguments.callee);

}

unaFuncion(2,4,6);

// Metodos (por ejemplo el metodo .toString())
let funcionTexto = unaFuncion.toString();
console.log(funcionTexto);


// Funciones flecha
const sumarFuncFlecha = (a, b) => a + b;
resultado = sumarFuncFlecha(8, 5);
console.log(resultado);
