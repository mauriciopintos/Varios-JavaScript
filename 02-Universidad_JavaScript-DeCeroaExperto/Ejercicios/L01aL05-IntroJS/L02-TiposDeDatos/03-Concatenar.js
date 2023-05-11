// Concatenar Strings
var nombre = 'Ricardo';
var apellido = 'Mollo';
var nombreCompleto = nombre + ' ' + apellido
console.log(nombreCompleto);
console.log(typeof nombreCompleto);

// Concatenar Strings + Number
var x = nombre + 24 + 87;
console.log(x);
console.log(typeof x);

// Concatenar Strings + Number (JavaScript evalua de izquierda a derecha)
x = nombre + (24 + 87);
console.log(x);
console.log(typeof x);

x = 24 + 87 + nombre;
console.log(x);
console.log(typeof x);

