/* Ejemplos de tipo de datos */

// String
var nombre = "Juan Carlos";
console.log(nombre);
console.log(typeof nombre);

// Number
var numero = 10000;
console.log(numero);
console.log(typeof numero);

// Object
var objeto = {
    nombre: "Jorge",
    apellido: "Lopez",
    dni: 54789541
};
console.log(objeto);
console.log(typeof objeto);

// Boolean
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

// Function
function miFuncion (){};
console.log(miFuncion);
console.log(typeof miFuncion);

// Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

// Class
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
};
console.log(Persona);
console.log(typeof Persona);

// Undefine
var x;
console.log(x);
console.log(typeof x);

// Null
var y = null;
console.log(y);
console.log(typeof y);

// Undefine
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

// Undefine
var z = '';
console.log(z);
console.log(typeof z);
